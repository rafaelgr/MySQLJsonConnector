// configManager.js
const config = require('./config.json');

const configManagerApi = {
    getConfiguration: () => {
        var cfg = {
            mysql: {
                host: process.env.MYSQLJC_HOST || config.mysql.host,
                port: process.env.MYSQLJC_PORT || config.mysql.port,
                username: process.env.MYSQLJC_USERNAME || config.mysql.username,
                password: process.env.MYSQLJC_PASSWORD || config.mysql.password
            },
            api: {
                port: process.env.PORT || config.api.port
            }
        } 
        return cfg;
    }
};

module.exports = configManagerApi;