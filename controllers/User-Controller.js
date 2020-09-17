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
        // console.log(req);
        db.User.findOne({
            where: {email: req.params.userEmail},
            include: (db.Recipe)
        })
        .then(dbUser => res.json(dbUser))
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