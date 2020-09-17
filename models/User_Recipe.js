module.exports = (sequelize, DataTypes) => {
    const User_Recipe = sequelize.define("User_Recipe",
        {
            // edit permissions. If true, the user has the ability to edit this specific recipe
            edited: DataTypes.BOOLEAN,
            favorite:DataTypes.BOOLEAN,
            recipeScore:DataTypes.INTEGER,
            yumScore: DataTypes.INTEGER,
            comment: DataTypes.TEXT,
            userRecipeKey: DataTypes.STRING,
        }, 
        { timestamps: false }
    );

    return User_Recipe;
};