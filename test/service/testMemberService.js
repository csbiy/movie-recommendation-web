const assert = require("assert");
const memberService = require("../../service/memberService");
const loginFormDto = require("../../model/loginFormDto");

describe('test_encryptPassword',function(){
    it('Should return encryted password',function(done){
        const testPw = "testPw";
        const testEmail = "test@email.com"
         let loginForm = new loginFormDto({email: testEmail ,password : testPw });
         memberService.encryptPassword(loginForm)
            .then((encryptedLoginForm) =>{
                assert.strictEqual(encryptedLoginForm.getEmail(),testEmail);
                assert.notStrictEqual(encryptedLoginForm.getPassword(),testPw);
                done();   
            })
            .catch((err)=>done(err))
        })  
})