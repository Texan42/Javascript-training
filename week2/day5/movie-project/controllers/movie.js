const Movie = require('../models/Movie.js');
const mongoose = require('mongoose');

const addMovie = async ({title, director, year}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI)
        const movie = new Movie({title, director, year})
        await movie.save();
        mongoose.connection.close();
        return {status: 201, message: `${title} created!`}
    } catch (err) {
        mongoose.connection.close();
        throw {status: 500, error: 'Could not create movie'};
    }
}

const getAllMovies = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const movies = await Movie.find();
        if (movies.length === 0) throw {status: 500, error: 'Could not find any movies'}
        mongoose.connection.close();
        return movies;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

module.exports = {
    addMovie,
    getAllMovies
}