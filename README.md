# MySQLJsonConnector
This project try to build an API to access MySQL database, tables and rows and return rows in JSON format  
This comes from a need founded in one our projects. We can't acccess a remote MySQL server because the client doesn't want any outside direct connection to his database, SSH option either.  
We need to obtain information for a Power Bi project that reports some information based in his data. Power Bi admits to be feeded from a web source in JSON format, in other words a REST API.  
Soution, build a REST API in NodeJS, install it in the server a access this way the information we need.



