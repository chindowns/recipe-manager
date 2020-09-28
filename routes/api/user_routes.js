const router = require("express").Router();
const user = require("../../controllers/User-Controller")

// Matches with "/api/user"
router
  .route("/")
  .post(user.create)
//   .get(user.findAll)
  .put(user.update);


// Matches with "/api/user/:userEmail" because we need to get ID from the email
router
  .route("/:email")
  .get(user.findOrCreate)
//   .delete(user.remove);

module.exports = router;
