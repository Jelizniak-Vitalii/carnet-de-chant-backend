const routerGetChants = require('express').Router();

const Chants = require('../models/chant.model');

routerGetChants.get('/allChants', (req, res) => {
    Chants.find((err, items) => {
        if (items) return res.status(200).send(items);
        return res.status(404).send('Песни не найдены');
    });
});

module.exports = routerGetChants;
