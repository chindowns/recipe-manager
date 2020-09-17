const router = require("express").Router();
const directions = require("../../controllers/Directions-Controllers");

// Matches with "/api/recipe"
router
  .route("/")
  .post(directions.create)

module.exports = router;