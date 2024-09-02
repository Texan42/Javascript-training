const mongoose = require('mongoose');
const userModel = require('../model/uesrmodel.js');
const Checkuser = require('../controller/Login.js');
require('dotenv').config();


const insertHotel = async ({email,psw,state}) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const val = {email:email,psw:psw};
        const number = (await Checkuser(val)).num;
        console.log(number,state.hotel,state.rooms,state.startDate,state.endDate);
        if (number === 1){
            await userModel.updateOne({email:email},{$push:{hotel:[{
                hotelName:state.hotel,
                hotelroom:state.rooms,
                startDate:state.startDate,
                endDate:state.endDate,
            }]}})
        }
        
    } catch(err){
        console.log(err); //Error
    }
}


module.exports = insertHotel;