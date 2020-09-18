const router = require("express").Router();
const recipe = require("../../controllers/Recipe-Controller");

// Matches with "/api/recipe"
router
  .route("/")
  .get(recipe.findAll)
  .post(recipe.create)
  .put(recipe.update)

//matches with "/api/recipe/all/top"

router
  .route("/all/top")
  .get(recipe.findTop25)

// Matches with "/api/recipe/one/:recipeId"
router
  .route("/one/:id")
  .get(recipe.findOne)
  // .put(recipe.update)
  .delete(recipe.delete);

module.exports = router;
