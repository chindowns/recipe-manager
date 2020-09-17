const db = require("../models");

// Defining methods for the tagController
module.exports = {
    findAll: function (req, res) {
        db.Tag.findAll({})
            .then(dbTag => res.json(dbTag))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Tag.findById(req.params.id)
            .then(dbTag => res.json(dbTag))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Tag.create(req.body)

            .then(dbTag => { res.json(dbTag.id); console.log(dbTag); })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Tag.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbTag => res.json(dbTag))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Tag.findById({ _id: req.params.id })
            .then(dbTag => dbTag.remove())
            .then(dbTag => res.json(dbTag))
            .catch(err => res.status(422).json(err));
    }
};