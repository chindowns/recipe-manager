const db = require("../models");

//Defining methods for the User-Controller
module.exports = {
    create: (req, res) => {
        console.log(`Create user ${req.body}`);
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },

    // findAll: (req, res) => {
    //     console.log(`Find All Users`)
    //     db.User.findAll({})
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    // },

    findOne: (req, res) => {
        db.User.findOrCreate({ where: { email: req.params.email }})
        .then(resultArr => res.json(resultArr[0]))
        .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User.update(req.body, 
            {where: { email: req.body.email}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // delete: (req, res) => {
    //     db.User.destroy(req.params.userEmail)
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err));
    // }
}