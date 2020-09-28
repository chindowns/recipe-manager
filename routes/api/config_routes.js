const router = require("express").Router();
const config = require("../../controllers/Config-Controller");

// Matches with "/api/configs/:name"
router
  .route("/:name")
  .post(config.create)
  .get(config.findOne)

module.exports = router;