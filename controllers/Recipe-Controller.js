const { Sequelize, Op } = require("sequelize");
const db = require("../models");
// Set Ingredient name and Tag name to trimmed lower case.
const setToLowerCase = require('../utils/setToLowerCase')

// Defining methods for the RecipeController
module.exports = {

  copy: (req, res) => {
    let directionSteps = req.body.directions;
    let ingredients = req.body.ingredients;
    let tags = req.body.tags;

    db.Recipe.findOrCreate({
      where: {
        'name': req.body.name,
        'userId': req.body.userId
      },
      defaults: {
        'name': req.body.name,
        'photo': req.body.photo,
        'servings': req.body.photo,
        'activeTime': req.body.activeTime,
        'totalTime': req.body.totalTime,
        'source': req.body.source,
        'sourceLink': req.body.sourceLink,
        'userId': req.body.userId
      }
    })
      .spread((resultArr, created) => {
        let dbRecipe = resultArr[0];
        let RecipeId = dbRecipe.dataValues.id;
        if (created) {
          // Adds the directions by mapping the directions array.  
          //The step and RecipeId are determined by recipe response and order in the array.
          directionSteps.map((direction, id) => {
            // console.log(`Add Direction RECIPEID: ${RecipeId}  STEP: ${id}`)
            db.Direction.create({
              step: id + 1,
              direction: direction,
              RecipeId: RecipeId
            })
              .then(dbDirection => res.sendStatus(200))
              .catch(err => res.status(422).json(err))
          })

          // Add the ingredients to Ingredient and Recipe_Ingredient tables
          ingredients.map(ingredient => {
            // console.log(`Add Ingredient: ${ingredient.name}`);
            const { name, id, Recipe_Ingredient } = ingredient
            const { specifics, amount, measurement } = Recipe_Ingredient;

            // DB LOOKUP for the name and create if it doesn't exist
            // findOrCreate returns an ARRAY.  dbIngredient is [dbInstance, createdBoolean]
            db.Ingredient.findOrCreate({ where: { "name": setToLowerCase(name) } })
              .then(resultArr => {
                let ingredientName = resultArr[0].name;

                db.Recipe_Ingredient.create({
                  "specifics": specifics,
                  "amount": amount,
                  "measurement": measurement,
                  "IngredientName": ingredientName,
                  "RecipeId": RecipeId
                })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })

          // Add the tags to Ingredient and Recipe_Tag table
          tags.map(tag => {
            // console.log(`Add Tag: ${tag.name}`);
            // let name = tag.name.trim().toLowerCase();

            db.Tag.findOrCreate({ where: { "name": setToLowerCase(tag.name) } })
              // findOrCreate returns an array [dbInstance, createdBoolean]
              .then(resultArr => {
                const [dbTag, created] = resultArr
                console.log(dbTag)
                db.Recipe_Tag.create({
                  "RecipeId": RecipeId,
                  "TagName": dbTag.name
                })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })

        }
        else {
          res.json(recipe.dataValues)
        }
      })
      .catch(err => res.status(422).json(err));
  },
  // Adds new recipes with complex eager loading 
  // includes Directions, Ingredients, Recipe_Ingredients and tags
  create: (req, res) => {
    let directionSteps = req.body.directions;
    let ingredients = req.body.ingredients;
    let tags = req.body.tags;

    db.Recipe.create(req.body)

      .then(dbRecipe => {
        // console.log(dbRecipe);
        let RecipeId = dbRecipe.dataValues.id;
        // Adds the directions by mapping the directions array.  
        //The step and RecipeId are determined by recipe response and order in the array.
        directionSteps.map((direction, id) => {
          // console.log(`Add Direction RECIPEID: ${RecipeId}  STEP: ${id}`)
          db.Direction.create({
            step: id + 1,
            direction: direction,
            RecipeId: RecipeId
          })
            .then(dbDirection => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        })

        // Add the ingredients to Ingredient and Recipe_Ingredient tables
        ingredients.map(ingredient => {
          // console.log(`Add Ingredient: ${ingredient.name}`);
          const { name, id, Recipe_Ingredient } = ingredient
          const { specifics, amount, measurement } = Recipe_Ingredient;

          // DB LOOKUP for the name and create if it doesn't exist
          // findOrCreate returns an ARRAY.  dbIngredient is [dbInstance, createdBoolean]
          db.Ingredient.findOrCreate({ where: { "name": setToLowerCase(name) } })
            .then(resultArr => {
              let ingredientName = resultArr[0].name;

              db.Recipe_Ingredient.create({
                "specifics": specifics,
                "amount": amount,
                "measurement": measurement,
                "IngredientName": ingredientName,
                "RecipeId": RecipeId
              })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })

        // Add the tags to Ingredient and Recipe_Tag table
        tags.map(tag => {
          // console.log(`Add Tag: ${tag.name}`);
          // let name = tag.name.trim().toLowerCase();

          db.Tag.findOrCreate({ where: { "name": setToLowerCase(tag.name) } })
            // findOrCreate returns an array [dbInstance, createdBoolean]
            .then(resultArr => {
              const [dbTag, created] = resultArr
              console.log(dbTag)
              db.Recipe_Tag.create({
                "RecipeId": RecipeId,
                "TagName": dbTag.name
              })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })

        res.json(dbRecipe.dataValues)
      })

      .catch(err => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Recipe.findAll({
      limit: 24,
      order: [['ratingAverage', 'DESC']],
      include: [
        db.Direction,
        db.Ingredient,
        db.Tag,
        db.User_Recipe
      ]
    })
      .then(dbRecipes => res.json(dbRecipes))
      .catch(err => res.status(422).json(err));
  },

  // findTop25: function (req, res) {
  //   db.Recipe.findAll({
  //     order: [['ratingAverage', 'DESC']],
  //     limit: 25
  //   })
  //     .then(dbRecipe => res.json(dbRecipe))
  //     .catch(err => res.status(422).json(err));
  // },

  findUserRecipes: (req, res) => {
    db.Recipe.findAll({
      include: {
        model: User_Recipe,
        where: { UserId: req.params.userId }
      }
    })
  },

  search: function (req, res) {
    // Search all recipes, ingredients and tags that have the search criteria
    // var recipes = [];
    // set array for db query results

    db.Recipe.findAll({
      // Find all recipes with search criteria in the Recipe Name, Tag Name and Ingredient Name
      where: {
        [Op.or]: [
          Sequelize.where(Sequelize.fn('lower', Sequelize.col('Recipe.name')), 'LIKE', `%${req.params.search}%`),
          Sequelize.where(Sequelize.fn('lower', Sequelize.col('Ingredients.name')), 'LIKE', `%${req.params.search}%`),
          Sequelize.where(Sequelize.fn('lower', Sequelize.col('Tags.name')), 'LIKE', `%${req.params.search}%`)
        ]
      },
      include: [
        db.Ingredient,
        db.Tag
      ],
      attributes: [Recipe.id, Recipe.name, Recipe.photo, Ingredients.name, Tags.name]
    })
      .then(result => {
        res.json(result);
        console.log(result);
      })
      .catch(err => res.status(422).json(err));
  },

  findOne: (req, res) => {
    db.Recipe.findOne({
      where: { id: req.params.id },
      include: [
        db.User,
        db.Ingredient,
        db.Direction,
        db.Tag]
    })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },


  update: function (req, res) {
    // console.log("request was made")
    db.Recipe.update(req.body,
      { where: { id: req.body.id } })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  delete: function (req, res) {
    db.Recipe.findAll({ id: req.params.id })
      .then(dbRecipe => dbRecipe.destroy())
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  }
};
