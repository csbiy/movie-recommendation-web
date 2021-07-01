const connection = require("./../../conf/db");
const memberFormDto = require("../../model/memberFormDto");
const memberFormDao = require("../../dataAccess/memberDao");
const assert = require("assert");

describe('test_isExistMember',function(){
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
        it("Shold not have duplicate email", async function(){
            this.timeout(10000);
            testDate = new Date();
            testMember = new memberFormDto(
                {
                    name: "testName",
                    email: "test@email.com",
                    password : "testPw",
                    gender : "M" , 
                    year : testDate.getFullYear(),
                    month :  testDate.getMonth() , 
                    day : testDate.getDate() 
                }
            );
            await memberFormDao.createMember(testMember);
            await memberFormDao.createMember(testMember);
            memberFormDao.isExistMember(testMember)
            .then((isExist)=>{
                assert.strictEqual(isExist,true);
                resolve();
            })
            .catch((err)=>{
                if(err) assert.fail();
            })
        })

    after("drop table user relation",function(){
        connection.query("drop table if exists user")
    })

})   
