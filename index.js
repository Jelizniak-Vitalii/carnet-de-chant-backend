const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require("mongoose");

const db = 'mongodb://localhost:27017/chants';

const routerGetChants = require('./routes/get-chants');
const routerAddChant = require('./routes/add-chant');

    mongoose.connect(db,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use('', routerGetChants);
    app.use('', routerAddChant);

    app.listen(3000, () => {
        console.log('Сервер запущен');
    }); 
});



