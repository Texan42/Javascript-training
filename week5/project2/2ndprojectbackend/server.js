const express = require('express');
const cors = require('cors');



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/create',require('./routes/Signin.js'));
app.use('/login',require('./routes/Login.js'));




app.get('/', (req,res) => {
    res.send('Abrham');
})

app.listen(8080, () => {
    console.log('Server is running at port 8080');
})