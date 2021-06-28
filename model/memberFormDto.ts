
interface Member {
    name : string;
    email : string;
    password : string;
    gender : string;
    year : number;
    month : number;
    day : number;
}
let memberFormDto = function(data :Member){
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.year = data.year;
    this.month = data.month;
    this.day = data.day;
}

memberFormDto.prototype.getName = function(){
    return this.name;
};
memberFormDto.prototype.getEmail = function(){
    return this.email;
};
memberFormDto.prototype.getPassword = function(){
    return this.password;
};
memberFormDto.prototype.getGender = function(){
    return this.gender;
}
memberFormDto.prototype.getYear = function(){
    return this.year;
};
memberFormDto.prototype.getMonth = function(){
    return this.month;
};
memberFormDto.prototype.getDay = function(){
    return this.day;
};