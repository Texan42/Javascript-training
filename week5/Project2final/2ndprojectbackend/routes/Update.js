const route = require('express').Router();
const updateInfo = require('../controller/Update.js');


route.post('/',async (req,res) => {
    try{
        const data = await updateInfo(req.body);

    }catch(err){
        console.log(err);
    }
})


module.exports = route;