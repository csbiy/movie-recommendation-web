const mysql = require('mysql');

createConnection = function(env){
    dbConfig = {
        connectionLimit : 10,
        host : "localhost",
        user: "root",
        password : "1234",
        database: ""
    }
    if(env == "development"){
       dbConfig["database"]= "nodejs";
    }
    else{
        dbConfig["database"] = "nodejs_test";
    }
    return connection = mysql.createPool(dbConfig)
};

module.exports = createConnection(process.env.DATABASE_ENV || "development");