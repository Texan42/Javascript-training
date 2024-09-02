const router = require('express').Router();
const {resolve} = require('path');

router.get('/', (req, res) => {
    res.sendFile(resolve('public', 'views', 'SNWest.html'));
})

module.exports = router;