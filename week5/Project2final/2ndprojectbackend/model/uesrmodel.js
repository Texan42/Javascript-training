const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: String,
    email:String,
    psw:String,
    hotel:[{
        hotelName:String,
        hotelroom:String,
        startDate:String,
        endDate:String,
    }]
})


const User = mongoose.model('User',userSchema);

module.exports = User;