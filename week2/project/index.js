const express = require('express');
const {resolve} = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8088

app.use(express.json()); //auto parses JSON data for us
app.use(express.urlencoded({extended: true})); // allows to parse encoded form data
app.use(express.static('public')); // sets aside a static assets folder for static content (html/css/js)

app.get('/', (req, res) => {
    res.sendFile(resolve('public', 'views', 'index.html'))
})

// routes to webpages
app.use('/SNWest', require('./routes/SNWest.js'))
app.use('/SNEast', require('./routes/SNEast.js'))
app.use('/SLWest', require('./routes/SLWest.js'))
app.use('/SLEast', require('./routes/SLEast.js'))
app.use('/STWest', require('./routes/STWest.js'))
app.use('/STEast', require('./routes/STEast.js'))

//routes to create items
app.use('/SNWCreate', require('./routes/api/SNWapi.js'))
app.use('/SNECreate', require('./routes/api/SNEapi.js'))
app.use('/SLWCreate', require('./routes/api/SLWapi.js'))
app.use('/SLECreate', require('./routes/api/SLEapi.js'))
app.use('/STWCreate', require('./routes/api/STWapi.js'))
app.use('/STECreate', require('./routes/api/STEapi.js'))

//routes to read items
app.use('/SNWRead', require('./routes/api/SNWapi.js'))
app.use('/SNERead', require('./routes/api/SNEapi.js'))
app.use('/SLWRead', require('./routes/api/SLWapi.js'))
app.use('/SLERead', require('./routes/api/SLEapi.js'))
app.use('/STWRead', require('./routes/api/STWapi.js'))
app.use('/STERead', require('./routes/api/STEapi.js'))

//routes to delete items
app.use('/SNWDelete', require('./routes/api/SNWapi.js'))
app.use('/SNEDelete', require('./routes/api/SNEapi.js'))
app.use('/SLWDelete', require('./routes/api/SLWapi.js'))
app.use('/SLEDelete', require('./routes/api/SLEapi.js'))
app.use('/STWDelete', require('./routes/api/STWapi.js'))
app.use('/STEDelete', require('./routes/api/STEapi.js'))

//routes to update items
app.use('/SNWUpdate', require('./routes/api/SNWapi.js'))
app.use('/SNEUpdate', require('./routes/api/SNEapi.js'))
app.use('/SLWUpdate', require('./routes/api/SLWapi.js'))
app.use('/SLEUpdate', require('./routes/api/SLEapi.js'))
app.use('/STWUpdate', require('./routes/api/STWapi.js'))
app.use('/STEUpdate', require('./routes/api/STEapi.js'))


app.listen(port, () => {
    console.log(`running on port ${port}`)
})