//express server
const express = require('express');
const {resolve} = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8088 //port 8085 (look at .env)

console.log(port);

app.use(express.json()); //auto parses JSON data for us
app.use(express.urlencoded({extended: true})); // allows to parse encoded form data
app.use(express.static('public')); // sets aside a static assets folder for static content (html/css/js)

app.use('/form', require('./routes/form.js'))
app.use('/movies', require('./routes/api/movie.js'))

app.get('/', (req, res) => {
    res.sendFile(resolve('public', 'views', 'index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(resolve('public', 'views', 'index.html'))
    // res.status(404).json({error: 'No Page Found'})
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

