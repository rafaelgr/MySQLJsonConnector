// connector_db_mysql.js
const mysql = require('mysql');
const config = require('../../config/configManager');
var cfg = config.getConfiguration();

const connectorDbMysqlApi = {
    getDbTableRecords: (db, table, done) => {
        var mysqlConfig = {
            host: cfg.mysql.host,
            user: cfg.mysql.username,
            password: cfg.mysql.password,
            database: db,
            port: cfg.mysql.port
        }
        var con = mysql.createConnection(mysqlConfig);
        con.connect((err) => {
            if (err) return done(err);
            var sql = "SELECT * FROM " + table;
            con.query(sql, (err, rows) => {
                con.end();
                if (err) return done(err);
                done(null, rows);
            });
        })
    }
}

module.exports = connectorDbMysqlApi;