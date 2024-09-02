const Item = require('../models/Items.js');
const mongoose = require('mongoose');

const SNWDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SNWest.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SNEDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SNEast.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLWDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SLWest.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLEDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.SLEast.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STWDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.STWest.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STEDelete = async (itemName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        await Item.STEast.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

module.exports = { 
    SNWDelete,
    SNEDelete,
    SLWDelete,
    SLEDelete,
    STWDelete,
    STEDelete
}