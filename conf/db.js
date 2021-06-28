const mysql = require('mysql');
connection = mysql.createPool({
    connectionLimit : 10,
    host : "localhost",
    user: "root",
    password : "1234",
    database: "nodejs"
})

module.exports = connection;