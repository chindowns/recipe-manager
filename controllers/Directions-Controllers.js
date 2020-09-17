const db = require('../models');

//test directions table

module.exports = {
    create: (req, res) => {
        db.Direction.create(req.body)

            .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
            .catch(err => res.status(422).json(err));
    }
}