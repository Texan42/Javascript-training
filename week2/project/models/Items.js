const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SNWestSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const SNEastSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const SLWestSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const SLEastSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const STWestSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const STEastSchema = new Schema({
    itemName:{
        type: String,
        required: true},
    SKU: {
        type: String,
        required: true}

});

const SNWest = mongoose.model ('SNW Items', SNWestSchema);
const SNEast = mongoose.model ('SNE items', SNEastSchema);
const SLWest = mongoose.model ('SLW items', SLWestSchema);
const SLEast = mongoose.model ('SLE items', SLEastSchema);
const STWest = mongoose.model ('STW items', STWestSchema);
const STEast = mongoose.model ('STE items', STEastSchema);

module.exports = {
    SNWest,
    SNEast,
    SLWest,
    SLEast,
    STWest,
    STEast
};