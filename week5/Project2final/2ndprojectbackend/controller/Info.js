const mongoose = require('mongoose');
const userModel = require('../model/uesrmodel.js');



const sendIfo = async ({email}) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const data = userModel.findOne({email:email});
        return data;

    }catch(err){
        console.log(err);
    }
}

module.exports = sendIfo;