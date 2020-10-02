const router = require("express").Router();
const user = require("../../controllers/User-Controller")

router
// Matches with "/api/user"
  .route("/")
  .put(user.update);

router
// Matches with "/api/user/session"
  .route("/session/:id")
  .get(user.findById)

router
// Matches with "/api/user/:userEmail" because we need to get ID from the email
  .route("/:email")
  .get(user.findOrCreate)

module.exports = router;
