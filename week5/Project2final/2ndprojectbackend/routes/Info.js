const route = require('express').Router();
const sendInfo = require('../controller/Info');





route.post('/',async (req,res) => {
    const data = await sendInfo(req.body);
    res.status(200).json(data);
});

module.exports = route;