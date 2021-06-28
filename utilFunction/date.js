
const days = ["일","월","화","수","목","금","토"];
function getCurrentDate(){
    let today = new Date();
    dayName= days[today.getDay()] ;
    month = today.getMonth() + 1;
    day = today.getDate();
    year = today.getFullYear();
    today = year + "/" + month + "/" + day + "(" + dayName + ")" ;
    return today;
}
console.log(getCurrentDate());
module.exports = { getCurrentDate };