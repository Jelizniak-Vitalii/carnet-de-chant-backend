const routerGetChantsByName = require('express').Router();

const Chants = require('../models/chant.model');

routerGetChantsByName.post('/getChantsByName', (req, res) => {
    const { name } = req.body;
    let regex = RegExp(".*" + name.toUpperCase() + ".*");
    Chants.find({name: regex}, (err, chant) => {
        if (err) return res.send(err);

        if (chant) {
            return res.status(200).send(chant);
        } else {
            return res.status(200).send({response: 'No songs found with this name'});
        }
    });
});

module.exports = routerGetChantsByName;
