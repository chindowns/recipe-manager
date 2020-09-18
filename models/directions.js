module.exports = (sequelize, DataTypes) => {
    const Direction = sequelize.define("Direction", {
        step: DataTypes.INTEGER,
        direction: DataTypes.TEXT,
    });

    Direction.associate = models => {
        Direction.belongsTo(models.Recipe);
    }

    return Direction;
}