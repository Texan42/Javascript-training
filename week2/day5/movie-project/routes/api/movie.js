const router = require('express').Router();
const {resolve} = require('path');
const { addMovie, getAllMovies } = require('../../controllers/movie.js');

// /movies
// get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
})
// req -> HTTP request object
// res -> HTTP response object
router.post('/', async (req, res) => {
    try {
        const data = await addMovie(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'index.html'));
    } catch (err) {
        res.status(500).json(err); //{status: 500, error: 'Movie could not be created'}
    }
    // console.log(req.body);
    // res.sendFile(resolve('public', 'views', 'index.html')) // /public/views/index.html
})

module.exports = router;