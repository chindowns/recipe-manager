
module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        }
    }, { timestamps: false });

    Ingredient.associate = models => {
        Ingredient.belongsToMany(models.Recipe, {through: models.RecipeIngredient });
        Ingredient.hasMany(models.RecipeIngredient);

    }

    return Ingredient;
}
