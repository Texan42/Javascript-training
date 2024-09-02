const route = require('express').Router();
const deleteReservation = require('../controller/Delete.js');



route.post('/',async (req,res) => {
    try{
        const data = await deleteReservation(req.body);

    }catch(err){
        console.log(err);
    }
})


module.exports = route;