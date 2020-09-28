const db = require('../models');

//Configuration Secret Keys

module.exports = {
    create: (req, res) => {
        db.Configs.create(req.body)
        .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
        .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        db.Config.findAll({
            where: {name: req.params.name}
        })
        .then(dbResult => res.json(dbResult[0]))
        .catch(err => res.status(422).json(err));
    }
}