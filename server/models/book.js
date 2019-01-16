const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    page: Number,
    price: Number
});

module.exports = mongoose.model('Book', bookSchema);