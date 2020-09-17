module.exports = (sequelize, DataTypes) => {
    const Recipe_Ingredient = sequelize.define("Recipe_Ingredient", {
        // specifics for this ingredient.
        // Example brand, can, fresh, dried, etc.
        specifics: DataTypes.STRING,
        // amount is a qty in string format - can be converted on client side if needed.
        amount: DataTypes.STRING,
        // measurement example tablespoon, teaspoon, cup, 'to taste' etc.
        measurement: DataTypes.STRING
        //IngredientId
        //RecipeId
    },{ timestamps: false });

    return Recipe_Ingredient;
}
