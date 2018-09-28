// version_controller.js
// Returns version number in response to a get
const express = require('express');
const pack = require('../../package.json');
var router = express.Router();

router.get('/', (req, res) => {
    res.json(pack.version);
})

module.exports = router;

