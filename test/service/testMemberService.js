const assert = require("assert");
const memberService = require("../../service/memberService");
const loginFormDto = require("../../model/loginFormDto");
const bcrypt = require("bcrypt");

describe('test_encryptPassword',function(){
    it('Should return encryted password without changing email',function(done){
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