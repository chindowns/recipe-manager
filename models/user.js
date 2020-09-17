module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    }, { timestamps: false } );

    User.associate = models => {
        User.belongsToMany(models.Recipe, {through: models.User_Recipe});
        User.hasMany(models.User_Recipe);

        models.User_Recipe.belongsTo(User);
    };

    return User;
};