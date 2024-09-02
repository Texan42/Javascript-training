const router = require('express').Router();
const {resolve} = require('path');
const { SLWAdd } = require('../../controllers/Items.js');
const { SLWRead } = require('../../controllers/readItems');
const { SLWDelete } = require('../../controllers/deleteItems.js');
const { SLWUpdate } = require('../../controllers/updateItems.js');

router.post('/', async (req, res) => {
    try {
        const data = await SLWAdd(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'SLWest.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await SLWRead();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:name', async (req, res) => {
    try {
        await SLWDelete(req.params.name);
        res.status(200).json({message: `${req.params.name} deleted`})
    } catch (err) {
        res.status(500).json({error: 'Unable to delete item'})
    }
})

router.put('/:name', async (req, res) => {
    try {
        await SLWUpdate(req.params.name);
        res.status(200).json({message: `item updated`})
    } catch (err) {
        res.status(500).json({error: 'Unable to update item'})
    }
})

module.exports = router;