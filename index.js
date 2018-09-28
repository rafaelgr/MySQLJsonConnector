const express = require('express');
const cors = require('cors');

const config = require('./config/configManager');
const pack = require('./package.json');
const cfg = config.getConfiguration();

var app = express();
app.use(cors());

// registering routes
app.use('/version', require('./api/version/version_controller'));
app.use('/connector', require('./api/connector/connector_controller'));

app.listen(cfg.api.port);

console.log('MySQLJsonConnector -- Runnnig');
console.log(new Date());
console.log("PORT: ", cfg.api.port);