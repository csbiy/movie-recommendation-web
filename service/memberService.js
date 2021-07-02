const memberDao = require("../dataAccess/memberDao");
const bcrypt = require("bcrypt");

/***
 * 비동기 처리의 콜백함수가 던진 예외는 콜백함수로 넘긴 함수로 전파되지 않습니다. 
 */
createMember =  function(member){
    return  memberDao.isExistMember(member)
        .then((isExist)=>{
            if(isExist){
            return new Error("exist member");
        }else{
            encryptPassword(member).then((member)=>{
                 memberDao.createMember(member);
         });
            return true;
        }
    })
    .catch((err)=>{if(err) throw err});
}

login = function(loginForm,res,req){
       return validatePassword(loginForm)
            .then((userName)=>{
             if(userName){
                req.session.name = loginForm.getEmail();
                return userName;
             }
              return false;
              
            })
            .catch((err) =>{ if(err) throw err});

    
}
function encryptPassword(form){
    return bcrypt.hash(form.getPassword(),12)
        .then((cryptedPw) =>{
            form.setPassword(cryptedPw);
            return form;
        })
        .catch((err)=>{if(err) throw err})
}

function validatePassword(form){
    return memberDao.getNamePasswordByEmail(form)
        .then((info) =>{
            encryptedPw = info[0]["password"];
            userName = info[0]["name"];
            if(bcrypt.compareSync(form.getPassword(),encryptedPw)){
                return userName;
            }
            return false;
        })
        .catch((err) => {if(err) throw err});
}

module.exports = { createMember , login , encryptPassword , validatePassword};