const mongoose = require('mongoose');

const gemsSchema = mongoose.Schema({
    name: String,
    color: String,
    value: String,
    piece: String
});

module.exports = mongoose.model('Gems', gemsSchema);
