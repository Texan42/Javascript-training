const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('../models/Movie.js');

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to database!');
        await findMovie('Star Wars');
        await findMovie('Star Wars: A New Hope');

    } catch (err) {
        console.log('Error handled');
    }
}

createConnection();

// FIND
 // find() -> SELECT * FROM MOVIES WHERE 'condition' // finds all documents that matches query constraints
 // findOne() -> finds the first document that matches the query constraints
 // findOneAndUpdate()  findOneAndDelete()

const findMovie = async (movieTitle) => {
    try{
        const movie = await Movie.findOne({title: movieTitle}); //mongodb only does promise.resolve(null) if the title (or anything) isnt there when searching, never rejects promise
        //Movie.findOne returns only resolved promises. it never rejects them
        // because they wanted it to work well with ES6 Async/Await
        if (movie == null) {
            throw `no movie with the name ${movieTitle} could be found`;
        }else{
        console.log(movie);}
    }
    catch (err) {
        console.error(err);
    }
}