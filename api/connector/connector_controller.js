// connector_controller.js
// Returns the rows from an specific database and table
const express = require('express');
const connectorDb = require('./connector_db_mysql');
var router = express.Router();

router.get('/:db/:table', (req, res) => {
    var db = req.params.db;
    var table = req.params.table;
    connectorDb.getDbTableRecords(db, table, (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    })
})

module.exports = router;

