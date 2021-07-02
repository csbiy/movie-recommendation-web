
const connection = require("../conf/db");
const dateConverter = require("./DateConverter");
const countIdx = 0;
isExistMember = function (member) {
    return new Promise(function (resolve, reject) {
        connection.query(`select count(*) as countedMember from user where email='${member.getEmail()}'`,function(err,res,fields){
            if(err) return reject(err);
            if(res[countIdx]["countedMember"] > 0) return resolve(true);
            else return resolve(false);
        });
    })
}
createMember =  function (member) {
    return new Promise(function(resolve,reject){
        connection.query(`insert into user(email,name,password,year,month,day,createdAt,gender) values ('${member.getEmail()}','${member.getName()}','${member.getPassword()}',${member.getYear()},${member.getMonth()},${member.getDay()},'${dateConverter.toMySQLDateTime(new Date())}','${member.getGender()}')`, function (err, res, fields) {
            if (err) return reject(err);
            return resolve(true);
        });
    })
}

getNamePasswordByEmail = function (loginForm) {
    return new Promise(function (resolve, reject) {
        connection.query(`select password,name from user where email='${loginForm.getEmail()}'`, function (err, res, fields) {
            if (err) return reject(err);
            return resolve(res);
        });
    });
}

module.exports = {
    createMember,
    getNamePasswordByEmail,
    isExistMember,
};