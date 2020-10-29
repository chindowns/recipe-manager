const router = require("express").Router();
const recipe = require("../../controllers/Recipe-Controller");

// Matches with "/api/recipe"
router
  .route("/")
  .get(recipe.findAll)
  .post(recipe.create)
  .put(recipe.update)

// matches with "/api/recipe/search/:search-:userId"
router
  .route("/search/:search")
  .get(recipe.search)

//matches with "/api/recipe/user/:userid"
router
  .route("/user/:userId")
  .get(recipe.findUserRecipes)

// Matches with "/api/recipe/one/:id"
router
  .route("/one/:id")
  .get(recipe.findOne)
  // .put(recipe.update)
  .delete(recipe.delete)

router
  .route("/copy")
  .post(recipe.copy)

module.exports = router;
