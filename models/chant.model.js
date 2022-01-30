const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    id: '',
    name: '',
    text: '',
    url: '',
});

module.exports = mongoose.model('Chants', DataSchema);
