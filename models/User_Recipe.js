module.exports = (sequelize, DataTypes) => {
    const User_Recipe = sequelize.define("User_Recipe",
        {
            // edit permissions. If true, the user has the ability to edit this specific recipe
            edit: DataTypes.BOOLEAN,
            favorite:DataTypes.BOOLEAN,
            recipeScore:DataTypes.INTEGER,
            tasteScore: DataTypes.INTEGER,
            comment: DataTypes.TEXT,
            // when the recipe is copied into a user's recipe list, the original ID set for tracking
            originalRecipeKey: DataTypes.STRING,
        }, 
        { timestamps: false }
    );

    return User_Recipe;
};