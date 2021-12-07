const routerGetChants = require('express').Router();

const Chants = require('../models/chant.model');

routerGetChants.get('/get_chants', (req, res) => {
    Chants.find((err, chants) => {
        if (chants) return res.status(200).send(chants);
        return res.status(404).send('Песни не найдены');
    });
});

module.exports = routerGetChants;
