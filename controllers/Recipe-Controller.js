const { Op } = require("sequelize");
const db = require("../models");

// Defining methods for the RecipeController
module.exports = {
  // Adds new recipes with complex eager loading 
  // includes Directions, Ingredients, Recipe_Ingredients and tags
  create: (req, res) => {
    let directionSteps = req.body.directions;
    let ingredients = req.body.ingredients;
    let tags = req.body.tags;

    db.Recipe.create(req.body)

      .then(dbRecipe => {
        console.log(dbRecipe);
        let RecipeId = dbRecipe.dataValues.id;
        // Adds the directions by mapping the directions array.  
        //The step and RecipeId are determined by recipe response and order in the array.
        directionSteps.map((direction, id) => {
          console.log(`Add Direction RECIPEID: ${RecipeId}  STEP: ${id}`)
          db.Direction.create({
            step: id + 1,
            direction: direction,
            RecipeId: RecipeId
          })
            // .then(dbDirection => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        })

        // Add the ingredients to Ingredient and Recipe_Ingredient tables
        ingredients.map(ingredient => {
          console.log(`Add Ingredient: ${ingredient.name}`);
          const { name, id, Recipe_Ingredient } = ingredient
          const { specifics, amount, measurement } = Recipe_Ingredient;

          // DB LOOKUP for the name and create if it doesn't exist
          db.Ingredient.findOrCreate({ where: { "name": name }})
            .then(dbIngredient => {
              let IngredientId = dbIngredient[0].id;

              db.Recipe_Ingredient.create({
                "specifics": specifics,
                "amount": amount,
                "measurement": measurement,
                "IngredientId": IngredientId,
                "RecipeId": RecipeId

              })
            })
        })

        // Add the tags to Ingredient and Recipe_Tag table
        tags.map(tag => {
          console.log(`Add Tag: ${tag.tag}`);
          const {category} = tag.Recipe_Tag;

          db.Tag.findOrCreate({where: {"tag": tag.tag}})
            category ? 
            db.Recipe_Tag.create({
              "category": category,
              "RecipeId": RecipeId,
              "TagTag": tag.Recipe_Tag.tag
            })
            :
            db.Recipe_Tag.create({
              "RecipeId": RecipeId,
              "TagTag": tag.Recipe_Tag.tag
            })
        })

        res.json(dbRecipe.dataValues.id)
      })

      .catch(err => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Recipe.findAll({
      limit: 25,
      include: {
        model: db.Recipe,
        include: db.Ingredient
      }
    })
      .then(dbRecipes => res.json(dbRecipes))
      .catch(err => res.status(422).json(err));
  },

  findTop25: function (req, res) {
    db.Recipe.findAll({
      order: [['ratingAverage', 'DESC']],
      limit: 25
    })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  search: function (req, res) {
    db.Recipe.findAll({
      limit: 25,
      where: {
        name: {
          [Op.like]: `%${req.params.search}%`
        }
      }
    })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.Recipe.findOne({
      where: { id: req.params.recipeId },
      include: [db.UserRecipe,
      db.RecipeIngredient,
      db.RecipeTag]
    })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },


  update: function (req, res) {
    // console.log("request was made")
    db.Recipe.update(req.body,
      { where: { id: req.body.recipeId } })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  delete: function (req, res) {
    db.Recipe.findAll({ id: req.params.recipeId })
      .then(dbRecipe => dbRecipe.destroy())
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  }
};