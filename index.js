const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require("mongoose");

const db = 'mongodb+srv://test:test@cluster0.bjplj.mongodb.net/test';

const routerGetChants = require('./routes/get-chants');
const routerAddChant = require('./routes/add-chant');

    mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, db) => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use('', routerGetChants);
    app.use('', routerAddChant);

    app.listen(process.env.PORT || 5000, () => {
        console.log('Сервер запущен');
    });
    if (err) {
        console.log(err)
    }
});



