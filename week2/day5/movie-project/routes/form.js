const router = require('express').Router();
const {resolve} = require('path');

// /form
router.get('/', (req, res) => {
    res.sendFile(resolve('public', 'views', 'createMovie.html'));
})
// // req -> HTTP request object
// // res -> HTTP response object
// router.post('/', async (req, res) => {
//     try {
//         const data = await addMovie(req.body); //req.body -> all the values from the form data
//         console.log(data);
//         res.sendFile(resolve('public', 'views', 'index.html'));
//     } catch (err) {
//         res.status(500).json(err); //{status: 500, error: 'Movie could not be created'}
//     }
//     // console.log(req.body);
//     // res.sendFile(resolve('public', 'views', 'index.html')) // /public/views/index.html
// })

module.exports = router;