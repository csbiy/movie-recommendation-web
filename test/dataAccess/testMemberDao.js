const connection = require("./../../conf/db");
const memberFormDto = require("../../model/memberFormDto");
const memberFormDao = require("../../dataAccess/memberDao");
const assert = require("assert");

describe('test_isExistMember',function(){
    beforeEach('initialize user relation',function(){
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
            if(err) throw err;
        })
        console.log("before finished!");
    });
        it("Shold not have duplicate email",function(done){
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
            console.log("createMember before:")
            memberFormDao.createMember(testMember);
            memberFormDao.createMember(testMember);
            memberFormDao.isExistMember(testMember)
            .then((isExist)=>{
                assert.strictEqual(isExist,true);
                done();
            })
            .catch((err)=>{
                if(err) done(err);
            })
        })
        /***
         * 동기 ,비동기 코드 실행순서를 맞추어줘야될것같으로보임 
         */
    after("drop table user relation",function(){
        connection.query("drop table if exists user")
    })

})   
