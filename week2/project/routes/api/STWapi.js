const router = require('express').Router();
const {resolve} = require('path');
const { STWAdd } = require('../../controllers/Items.js');
const { STWRead } = require('../../controllers/readItems');
const { STWDelete } = require('../../controllers/deleteItems.js');
const { STWUpdate } = require('../../controllers/updateItems.js');

router.post('/', async (req, res) => {
    try {
        const data = await STWAdd(req.body); //req.body -> all the values from the form data
        console.log(data);
        res.sendFile(resolve('public', 'views', 'STWest.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await STWRead();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:name', async (req, res) => {
    try {
        await STWDelete(req.params.name);
        res.status(200).json({message: `${req.params.name} deleted`})
    } catch (err) {
        res.status(500).json({error: 'Unable to delete item'})
    }
})

router.put('/:name', async (req, res) => {
    try {
        await STWUpdate(req.params.name);
        res.status(200).json({message: `item updated`})
    } catch (err) {
        res.status(500).json({error: 'Unable to update item'})
    }
})

module.exports = router;