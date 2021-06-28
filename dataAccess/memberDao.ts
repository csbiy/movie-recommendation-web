const connection  =  require("../conf/db");
const dateConverter = require("./DateConverter");


/***
 * NOTE create read update delete member 
 */
const createMember = function(member :Member){
    
    connection.query(`insert into user(email,name,password,year,month,day,createdAt,gender) values ('${member.getEmail()}','${member.getName()}','${member.getPassword()}',${member.getYear()},${member.getMonth()},${member.getDay()},${dateConverter.toMySQLDateTime(new Date())},${member.getGender()})`,function(err,res,fields){
        if(err) throw err;
        console.log(res);
    });
}


module.exports = { createMember , };