const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artSchema = new Schema({
        name: String,
        value: String,
        piece: String
    },
    {collection: 'art_objects'});

module.exports = mongoose.model('Art', artSchema);
