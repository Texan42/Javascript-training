const mongoose = require('mongoose');
const Hotel = require('../model/uesrmodel.js');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const updateInfo = async ({email,myid,hotelName,startDate,endDate,hotelroom}) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        console.log(myid);
        const data = await Hotel.findOne({email:email})
        await Hotel.updateOne({'hotel._id': myid},
                            {$set: {'hotel.$.hotelName': hotelName, 
                                    'hotel.$.hotelroom': hotelroom, 
                                    'hotel.$.startDate': startDate, 
                                    'hotel.$.endDate': endDate}});     

    }catch(err){
        console.log(err);
    }
}


module.exports = updateInfo;




