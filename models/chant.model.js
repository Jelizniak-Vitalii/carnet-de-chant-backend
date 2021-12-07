const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    id: '',
    chant_name: '',
    text: '',
    audio: '',
    audio_minus: ''
});

module.exports = mongoose.model('Chants', DataSchema);
