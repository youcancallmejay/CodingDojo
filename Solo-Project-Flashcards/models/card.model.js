const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    word: {type: String, required: true},
    example: {type: String, required: true}, 
    translation: {type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Card', CardSchema);
