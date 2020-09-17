
module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, { timestamps: false });

    Ingredient.associate = models => {
        Ingredient.belongsToMany(models.Recipe, {through: models.Recipe_Ingredient});
        Ingredient.hasMany(models.Recipe_Ingredient);

        models.Recipe_Ingredient.belongsTo(Ingredient);

    }

    return Ingredient;
}
