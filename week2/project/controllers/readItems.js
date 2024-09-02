const Item = require('../models/Items.js');
const mongoose = require('mongoose');

const SNWRead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.SNWest.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SNERead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.SNEast.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLWRead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.SLWest.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const SLERead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.SLEast.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STWRead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.STWest.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

const STERead = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Item.STEast.find();
        if (items.length === 0) throw {status: 500, error: 'No items in warehouse'}
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

module.exports = {
    SNWRead,
    SNERead,
    SLWRead,
    SLERead,
    STWRead,
    STERead
}