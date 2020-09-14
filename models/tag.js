module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        }
    });
    
    Tag.associate = models => {
        Tag.belongsToMany(models.Recipe, { through: models.RecipeTag });
        Tag.hasMany(models.RecipeTag);


    }


    return Tag;
};