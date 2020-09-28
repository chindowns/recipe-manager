const router = require('express').Router();

const user_routes = require("./user_routes");
const recipe_routes = require("./recipe_routes");
// const ingredient_routes = require("./ingredient_routes")
const config_routes = require("./config_routes");


// user routes match '/api/user
router.use("/user", user_routes);
router.use("/recipe", recipe_routes);
router.use("/config", config_routes)

module.exports = router;