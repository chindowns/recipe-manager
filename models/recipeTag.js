module.exports = (sequelize, DataTypes) => {
    const RecipeTag = sequelize.define("RecipeTag", {
        category: DataTypes.STRING,
    });

RecipeTag.associate = models => {
    
    RecipeTag.belongsTo(models.Tag);
    RecipeTag.belongsTo(models.Recipe);
    
};
return RecipeTag;
};