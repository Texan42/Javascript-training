const mongoose = require('mongoose');
const userHotel = require('./model/uesrmodel.js');

const fun = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/hotelUsers");
        const postion = `hotel.${1}`;
        await userHotel.findOneAndUpdate({email:'seifu670@gmail.com'},{$unset:{[postion]:1}});
        await userHotel.findOneAndUpdate({email:'seifu670@gmail.com'},{$pull:{'hotel':null}});
        
    }catch(err){
        console.log(err);
    }
}

// const deleteHotel = () => {
//         const data = userHotel.findOne({email:'seifu670@gmail.com'});
//         // const myid =  data.hotel[0]._id;
//         // // console.log(id);
//         // // await userHotel.findOneAndUpdate({email:'seifu670@gmail.com'},{$pull: {hotel: {id}}});
//         // data.hotel.id(myid).remove();
//         // data.save();
//         // console.log('Delete Method')
        
  
// }

fun();




