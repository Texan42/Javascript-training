const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true},
    director: String,
    year: Number
});

const Movie = mongoose.model('Movie', movieSchema); //'movie' names the database in mongodb, mongo may add an 's' to it

module.exports = Movie;