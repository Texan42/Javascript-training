const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('../models/Movie.js');

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to database!');
        // await updateOneMovie('Star Wars', 2021);
        await updateManyMovies('Star Wars', 'Star Wars: A New Hope')
    } catch (err) {
        console.log('Error handled');
    }
}

createConnection();

/**
 * Update in general
 * first parameter: pattern to match // can search for multiple properties {title: movieTitle, year: 2021}
 * second parameter: value to update // can update multiple properties
 */

const updateOneMovie = async (movieTitle, newYear) => {
    const response = await Movie.updateOne({title: movieTitle}, {year: newYear});
    console.log(response);
}

const updateManyMovies = async (oldTitle, newTitle) => {
    const response = await Movie.updateMany({title: oldTitle}, {title: newTitle});
    console.log(response);
}