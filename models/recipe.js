
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: DataTypes.STRING,
        servingSize: DataTypes.STRING,
        activeTime: DataTypes.INTEGER,
        totalTime: DataTypes.INTEGER,
        directions: DataTypes.TEXT,
        source: DataTypes.TEXT,
        ratingAverage: DataTypes.FLOAT,
        ratingCount: DataTypes.INTEGER,
        ratingTotal: DataTypes.INTEGER
    }, { timestamps: false  });

    Recipe.associate = models => {
        Recipe.belongsToMany(models.User, {through: models.UserRecipe});
        Recipe.hasMany(models.UserRecipe);

        Recipe.belongsToMany(models.Tag, {through: models.RecipeTag});
        Recipe.hasMany(models.RecipeTag);

        Recipe.belongsToMany(models.Ingredient, {through: models.RecipeIngredient}); 


        Recipe.hasMany(models.RecipeIngredient,{onDelete: "cascade"});
        Recipe.hasMany(models.RecipeTag);
        Recipe.hasMany(models.UserRecipe);

        };
    

    return Recipe;
};

