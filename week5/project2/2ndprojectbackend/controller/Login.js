const mongoose = require('mongoose');
const Users = require('../model/uesrmodel.js');
const bcrypt = require('bcrypt');
require('dotenv').config();


const CheckUser = async ({email,psw}) => {
    
    try {
        await mongoose.connect("mongodb://localhost:27017/hotelUsers");
        const data = await Users.findOne({email:email});
        if (data) {
            const macthPsw = await bcrypt.compare(psw,data.psw);
            if(macthPsw){
                
                return { //Login Sucessfully
                    userdata: data,
                    num:1
                };
            }else{
                
                return { //Email and psw dont match
                    num: 0
                };
            }
        }
       
        return {  //user not in system 
             num:-1
        };
        
    }catch(err){
        console.log(err);
    }
   
}

module.exports = CheckUser;