
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
        // directions: DataTypes.TEXT,
        source: DataTypes.TEXT,
        sourceLink: DataTypes.STRING,
        ratingAverage: DataTypes.FLOAT,
        ratingCount: DataTypes.INTEGER,
        ratingTotal: DataTypes.INTEGER
    });

    Recipe.associate = models => {
        Recipe.belongsToMany(models.User, {through: models.User_Recipe});
        Recipe.hasMany(models.User_Recipe);

        models.User_Recipe.belongsTo(Recipe);

        Recipe.belongsToMany(models.Tag, {through: models.Recipe_Tag});
        Recipe.hasMany(models.Recipe_Tag);

        models.Recipe_Tag.belongsTo(Recipe);

        Recipe.belongsToMany(models.Ingredient, {through: models.Recipe_Ingredient}); 
        Recipe.hasMany(models.Recipe_Ingredient);

        models.Recipe_Ingredient.belongsTo(Recipe);

        Recipe.hasMany(models.Direction);

        };
    

    return Recipe;
};

