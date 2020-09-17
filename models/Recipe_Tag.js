module.exports = (sequelize, DataTypes) => {
    const Recipe_Tag = sequelize.define("Recipe_Tag", {
        // category: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }
    }, {timestamps: false});
return Recipe_Tag;
};