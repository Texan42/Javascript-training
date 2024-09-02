const mongoose = require('mongoose');
const Users = require('../model/uesrmodel.js');
const bcrypt = require('bcrypt');
require('dotenv').config();



const addUser = async({username,email,psw}) => {
    try{
        await mongoose.connect("mongodb://localhost:27017/hotelUsers");
        const emailExist = await Users.exists({email:email});
        if (emailExist){
            console.log('Account is already exist');
        }else{
            const hasedPsw = await bcrypt.hash(psw,10);
            const users = await Users({
                username:username,
                email:email,
                psw:hasedPsw
            })
            await users.save();
        }
    }catch(err){
        console.log(err);
    }
    mongoose.connection.close();
}

module.exports = addUser;