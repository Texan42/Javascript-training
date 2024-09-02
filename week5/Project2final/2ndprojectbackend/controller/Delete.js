const mongoose = require('mongoose');
const userHotel = require('../model/uesrmodel.js');
require('dotenv').config();



const deleteReservation = async ({email,id}) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const postion = `hotel.${id}`;
        await userHotel.findOneAndUpdate({email:email},{$unset:{[postion]:1}});
        await userHotel.findOneAndUpdate({email:email},{$pull:{'hotel':null}});
        

    }catch(err){
        console.log(err);
    }
}


module.exports = deleteReservation;