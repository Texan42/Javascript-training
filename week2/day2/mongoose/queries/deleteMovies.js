const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('../models/Movie.js');

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to database!');
        // await deleteMovie(2021);
        await deleteMovies('Star Wars')
    } catch (err) {
        console.log('Error handled');
    }
}

createConnection();

const deleteMovie = async (invalidYear) => {
    const response = await Movie.deleteOne({year: invalidYear});
    console.log(response);
}

const deleteMovies = async (movieTitle) => {
    const response = await Movie.deleteMany({title: movieTitle});
    console.log(response);
}