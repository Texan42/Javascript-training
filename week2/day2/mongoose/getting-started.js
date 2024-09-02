const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('./models/Movie.js');

 // Connects to MongoAtlas
// const connection = mongoose.connection; // Creates a connection variable (optional)

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to database!');
    } catch (err) {
        console.log('Error handled');
    }
}

createConnection();

// connection.once('open', () => {
//     console.log('Database connection established.');
//     // connection.close(); // Closes connection
// });

// connection.once('close', () => {
//     console.log('Connection closed');
// })
// FAKE_URI=myFakeURI

const starWars = new Movie({
    title: 'Star Wars',
    year: '1977',
    actors: ['Mark Hamill', 'Carie Fisher', 'Alec Guinness'],
    reviews: [{
        company: 'Rotten Tomatoes',
        rating: '100%'
    }, {
        company: 'iMDB',
        rating: '8/10'
    }]
});

console.log(starWars.containsActor('Carie Fisher'));

// starWars.save()
// .catch(err => console.error('Must have a title property'));