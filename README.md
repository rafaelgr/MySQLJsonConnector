# MySQLJsonConnector
This project try to build an API to access MySQL database, tables and rows and return rows in JSON format  
This comes from a need founded in one our projects. We can't acccess a remote MySQL server because the client doesn't want any outside direct connection to his database, SSH option either.  
We need to obtain information for a Power Bi project that reports some information based in his data. Power Bi admits to be feeded from a web source in JSON format, in other words a REST API.  
Solution, build a REST API in NodeJS, install it in the server a access this way the information we need.
## How to install  
MySQLJsonCOnnector requires [Node.js](https://nodejs.org/) to run.
- First clone this project into tour local machine
- Go to your cloned folder and execute *npm install*
## How to configure it
You have two ways in order to configure the utility
### The config.json file
This file is located in the */config* directory 
```
{
    "mysql": {
        "host": "localhost",
        "port": "3306",
        "username": "root",
        "password": "password"
    },
    "api": {
        "port": "8089"
    }
}
```





