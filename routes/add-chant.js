const routerAddChant = require('express').Router();

const Chants = require('../models/chant.model');

routerAddChant.post('/addChant', (req, res) => {
    const data = req.body;

    Chants.findOne({ chant_name: data.chant_name }, (err, chant) => {
        if (chant) return res.status(400).send('Песня с таким именем уже существует');
        const newChant = new Chants(data);
        newChant.save((err, response) => {
            if (err) return res.status(400).send('Песня не создана');
            return res.send('Песня добавлена в базу');
        })
    });
});

module.exports = routerAddChant;
