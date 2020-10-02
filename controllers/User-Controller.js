const db = require("../models");

//Defining methods for the User-Controller
module.exports = {
    findOrCreate: (req, res) => {
        console.log(`Create user ${req.body}`);
        db.User.findOrCreate({
            where: {'email': req.params.email}
        })
        .then(dbUser => res.json(dbUser[0]))
        .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        console.log('Getting User by Session ID')
        db.User.findAll({
            where: {id: req.params.id}
        })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
    },

    update: function (req, res) {
        db.User.update(req.body, 
            {where: { email: req.body.email}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

}