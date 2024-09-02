const Item = require('../models/Items.js');
const mongoose = require('mongoose');

const SNWUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SNWest.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SNEUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SNEast.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLWUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SLWest.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLEUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SLEast.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STWUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.STWest.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STEUpdate = async (param) => {
    const updates = param.split(',');
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.STEast.updateOne({itemName: updates[0]}, {itemName: updates[1], SKU: updates[2]});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

module.exports = {
    SNWUpdate,
    SNEUpdate,
    SLWUpdate,
    SLEUpdate,
    STWUpdate,
    STEUpdate,
}