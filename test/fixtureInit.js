

before('initialize user relation', function(){
    return new Promise(function(resolve,reject){
        connection.query(`
        CREATE TABLE IF NOT EXISTS nodejs_test.user (
            user_id INT NOT NULL AUTO_INCREMENT,
            email VARCHAR(200) NOT NULL,
            name VARCHAR(10) NOT NULL,
            password VARCHAR(500) NOT NULL,
            year INT NOT NULL,
            month INT NOT NULL,
            day INT NOT NULL,
            createdAt DATETIME NOT NULL,
            updatedAt DATETIME NULL,
            gender CHAR(1),
            PRIMARY KEY (user_id));
        `,function(err,res,fields){
            if(err) throw reject(err);
            resolve();
        })
    }) 
});

beforeEach("clear table row",function(){
    return new Promise(function(resolve,reject){
            connection.query("truncate nodejs_test.user",function(err,res,fields){
            if(err) throw reject(err);
            resolve();
        })
    })
})

after("drop table user relation",function(){
    return new Promise(function(resolve,reject){
        connection.query("drop table if exists user")
        resolve();
    })  
})