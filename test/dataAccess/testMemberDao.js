
const memberFormDto = require("../../model/memberFormDto");
const memberFormDao = require("../../dataAccess/memberDao");
const assert = require("assert");
const loginFormDto = require("../../model/loginFormDto");
describe('test_memberDao',function(){
    
        it("test_isExistMember : Shold not have duplicate email", async function(){
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
        it("test_getNamePasswordByEmail", async function(){
            const testEmail = "test@Email.com";
            const testPw = "testPw";
            const testName = "testName";
            testDate = new Date();
            loginForm = new loginFormDto({
                email: testEmail ,
                password: testPw,
            })
            testMember = new memberFormDto(
                {
                    name: testName,
                    email: testEmail ,
                    password : testPw ,
                    gender : "M"  , 
                    year : testDate.getFullYear(),
                    month :  testDate.getMonth() , 
                    day : testDate.getDate() 
                }
            );
            await memberFormDao.createMember(testMember);
            rowDataPacket = await memberFormDao.getNamePasswordByEmail(loginForm);
            assert.strictEqual(rowDataPacket[0]["password"],testPw);
            assert.strictEqual(rowDataPacket[0]["name"],testName);
            
        })

})   
