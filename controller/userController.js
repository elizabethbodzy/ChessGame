const db = require('../model/User');

module.exports = {
    findAll: (req, res) => {
        db.find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    findById: (req, res) => {
        db.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findUser: (req, res) => {
        let user = req.user;
        user.password = null;
        res.json({ user });
    }
};