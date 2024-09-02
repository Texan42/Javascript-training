const router = require('express').Router();
const {resolve} = require('path');

router.get('/', (req, res) => {
    res.sendFile(resolve('ajax.html'), (err) => {{
        if (err) throw err;
    }});
})

router.post('/', (req, res) => {
    console.log('Inside form POST');
    console.log(req.body);
    const name = req.body.username;
    res.status(200).json({username: name.toUpperCase()});
});

module.exports = router;