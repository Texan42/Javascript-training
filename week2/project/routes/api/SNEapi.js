const router = require('express').Router();
const {resolve} = require('path');
const { SNEAdd } = require('../../controllers/Items.js');
const { SNERead } = require('../../controllers/readItems');
const { SNEDelete } = require('../../controllers/deleteItems.js');
const { SNEUpdate } = require('../../controllers/updateItems.js');

router.post('/', async (req, res) => {
    try {
        const data = await SNEAdd(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'SNEast.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await SNERead();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:name', async (req, res) => {
    try {
        await SNEDelete(req.params.name);
        res.status(200).json({message: `${req.params.name} deleted`})
    } catch (err) {
        res.status(500).json({error: 'Unable to delete item'})
    }
})

router.put('/:name', async (req, res) => {
    try {
        await SNEUpdate(req.params.name);
        res.status(200).json({message: `item updated`})
    } catch (err) {
        res.status(500).json({error: 'Unable to update item'})
    }
})

module.exports = router;