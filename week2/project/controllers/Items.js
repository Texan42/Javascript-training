const Item = require('../models/Items.js');
const mongoose = require('mongoose');

const SNWAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.SNWest({itemName, SKU})
        const inv = await Item.SNWest.find();
        if(inv.length === 5) {
            throw {status: 406, error: 'Max capacity reached.'}
            // MAKE AN ERROR PAGE TO REPLACE THIS ^^^^
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } 
    catch (err) {
        mongoose.connection.close();
        throw err
    }
}

const SNEAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.SNEast({itemName, SKU})
        const inv = await Item.SNEast.find();
        if(inv.length === 5) {
            throw {status: 406, error: 'Max capacity reached.'}
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } catch (err) {
        mongoose.connection.close();
        throw err
    }
}

const SLWAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.SLWest({itemName, SKU})
        const inv = await Item.SLWest.find();
        if(inv.length === 10) {
            throw {status: 406, error: 'Max capacity reached.'}
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } catch (err) {
        mongoose.connection.close();
        throw err
    }
}

const SLEAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.SLEast({itemName, SKU})
        const inv = await Item.SLEast.find();
        if(inv.length === 10) {
            throw {status: 406, error: 'Max capacity reached.'}
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } catch (err) {
        mongoose.connection.close();
        throw err
    }
}

const STWAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.STWest({itemName, SKU})
        const inv = await Item.STWest.find();
        if(inv.length === 15) {
            throw {status: 406, error: 'Max capacity reached.'}
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } catch (err) {
        mongoose.connection.close();
        throw err
    }
}

const STEAdd = async ({itemName, SKU}) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const item = new Item.STEast({itemName, SKU})
        const inv = await Item.STEast.find();
        if(inv.length === 15) {
            throw {status: 406, error: 'Max capacity reached.'}
        } else{
            await item.save();
            mongoose.connection.close();
            return {status: 200, message: `${itemName} created.`};
        }
    } catch (err) {
        mongoose.connection.close();
        throw err
    }
}

module.exports = {
    SNWAdd,
    SNEAdd,
    SLWAdd,
    SLEAdd,
    STWAdd,
    STEAdd
};