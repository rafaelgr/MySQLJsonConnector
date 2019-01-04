# MySQLJsonConnector (MYSQLJC)
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
These parameters have these meanings
- **mysql.host**: Ip or dns where my MySQL runs
- **mysql.port**: Port of MySQL
- **mysql.username**: User with privileges in the database / tables yo want to read from
- **mysql.password**: User's password
- **api.port**: Port when the API will run
  
### Enviromental variables
All this features are available via env variables, with this equivalence:  
- **MYSQLJC_HOST** = mysql.host,
- **MYSQLJC_PORT** = mysql.port,
- **MYSQLJC_USERNAME** = mysql.username,
- **MYSQLJC_PASSWORD** = mysql.password
- **PORT** = api.port

## How to run it
Simply run *npm start*

## How to use it
Supouse you are runnig MYSQLJC in your localhost at port 8089.  
In a web browser type *http://localhost:8089/version* and you'll see the version of the utility, aditionally you check if it is running.    
The general url has the form *http://localhost:8089/connector/db/table* that returns in JSON format the rows of the 'table' in the 'db'.   
A quick exemple. Supouse you a have a MySQL database named 'rrhh' with a table 'employees' in it, and you want to retrive the employees data.  
Your url will be *http://localhost:8089/connector/rrhh/employees* 

Change Hotfix s0101




