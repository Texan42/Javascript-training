const router = require('express').Router();
const {resolve} = require('path');
const { SNWAdd } = require('../../controllers/Items.js');
const { SNWRead } = require('../../controllers/readItems.js');
const { SNWDelete } = require('../../controllers/deleteItems.js');
const { SNWUpdate } = require('../../controllers/updateItems.js');

router.post('/', async (req, res) => {
    try {
        const data = await SNWAdd(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'SNWest.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await SNWRead();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:name', async (req, res) => {
    try {
        await SNWDelete(req.params.name);
        res.status(200).json({message: `${req.params.name} deleted`})
    } catch (err) {
        res.status(500).json({error: 'Unable to delete item'})
    }
})

router.put('/:name', async (req, res) => {
    try {
        await SNWUpdate(req.params.name);
        res.status(200).json({message: `item updated`})
    } catch (err) {
        res.status(500).json({error: 'Unable to update item'})
    }
})

module.exports = router;