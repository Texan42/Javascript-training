const route = require('express').Router();
const addUser = require('../controller/Signin.js');




route.post('/',async(req,res) => {
   try{
       const data = await addUser(req.body);
   }catch(err){
       console.log(err);
   }
   res.status(201).json({});
})


module.exports = route;