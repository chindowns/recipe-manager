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
        Tag.belongsToMany(models.Recipe, { through: models.Recipe_Tag });
        Tag.hasMany(models.Recipe_Tag);

        models.Recipe_Tag.belongsTo(Tag);
    };

    return Tag;
};