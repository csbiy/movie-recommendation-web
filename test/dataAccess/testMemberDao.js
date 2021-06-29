const connectionPool = require("./../../conf/db")
const memberFormDto = require("../../model/memberFormDto");
const memberFormDao = require("../../dataAccess/memberDao");
const assert = require("assert");

/***
 * hook에서 create talbe ~~~ drop table ~~~~하면될듯합니다. 
 */
describe("test_isExistMember",function(){
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
            })
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
})


