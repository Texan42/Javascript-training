const route = require('express').Router();
const CheckUser = require('../controller/Login.js');
const insertHotel = require('../controller/InsertHotel.js');



route.post('/', async (req,res) => {
   
    try{
        if (req.body.state){
            await insertHotel(req.body);
        }
        const data = await CheckUser(req.body);
        if (data.num === 1) {
            res.status(200).json(data);
        }else{
            if (data.num === -1){
                res.status(200).json(data)
            }else{
                res.status(200).json(data)
            }
        }
    }catch(err){
        console.log(err);
       res.status(500).json(err);
    }
})




module.exports = route;