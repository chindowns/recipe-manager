const router = require('express').Router();

const user_routes = require("./user_routes");
const recipe_routes = require("./recipe_routes");
// const ingredient_routes = require("./ingredient_routes")
const directions_routes = require("./directions_routes");


// user routes match '/api/user
router.use("/user", user_routes);

router.use("/recipe", recipe_routes);

// router.use("/ingredient", ingredient_routes);

//test directions table
router.use("/directions", directions_routes)

module.exports = router;