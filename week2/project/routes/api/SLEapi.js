const router = require('express').Router();
const {resolve} = require('path');
const { SLEAdd } = require('../../controllers/Items.js');
const { SLERead } = require('../../controllers/readItems');
const { SLEDelete } = require('../../controllers/deleteItems.js');
const { SLEUpdate } = require('../../controllers/updateItems.js');

router.post('/', async (req, res) => {
    try {
        const data = await SLEAdd(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'SLEast.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await SLERead();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:name', async (req, res) => {
    try {
        await SLEDelete(req.params.name);
        res.status(200).json({message: `${req.params.name} deleted`})
    } catch (err) {
        res.status(500).json({error: 'Unable to delete item'})
    }
})

router.put('/:name', async (req, res) => {
    try {
        await SLEUpdate(req.params.name);
        res.status(200).json({message: `item updated`})
    } catch (err) {
        res.status(500).json({error: 'Unable to update item'})
    }
})

module.exports = router;