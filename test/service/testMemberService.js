const assert = require("assert");
const memberService = require("../../service/memberService");
const loginFormDto = require("../../model/loginFormDto");
const memberFormDto = require("../../model/memberFormDto");
const bcrypt = require("bcrypt");

describe("test_MemberService",function(){
it("test_validatePassword : Should have same password ",async function(){
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
                name: testName ,
                email: testEmail ,
                password : testPw ,
                gender : "M"  , 
                year : testDate.getFullYear(),
                month :  testDate.getMonth() , 
                day : testDate.getDate() 
            }
        );
        memberService.createMember(testMember).then(()=>{
            userName =  memberService.validatePassword(loginForm);
            assert.strictEqual(userName,testName);
        });
})

it('test_encryptPassword : Should return encryted password without changing email',function(done){
    const testPw = "testPw";
    const testEmail = "test@email.com"
        let loginForm = new loginFormDto({email: testEmail ,password : testPw });
        memberService.encryptPassword(loginForm)
        .then((encryptedLoginForm) =>{
            assert.strictEqual(encryptedLoginForm.getEmail(),testEmail);
            assert.strictEqual(true,bcrypt.compareSync(testPw,encryptedLoginForm.getPassword()));
            done();   
        })
        .catch((err)=>done(err))
    })  
})