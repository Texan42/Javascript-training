const express = require('express');

const app = express();
app.use(express.json());

app.use('/form', require('./routes/form.js'));

app.get('/:name', (req, res) => {
    console.log(req.params);
    res.send('Hello World');
}); 

app.get('/name', (req, res) => {
    console.log(req.params);
    res.send('Hello World');
}); 


app.listen(8084, () => {
    console.log('Listening on 8084!');
});