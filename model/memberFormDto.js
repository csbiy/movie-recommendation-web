class memberFormDto {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.gender = data.gender;
        this.year = data.year;
        this.month = data.month;
        this.day = data.day;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(cryptedPw){
        this.password = cryptedPw;
        return true;
    }
    getGender() {
        return this.gender;
    }
    getYear() {
        return this.year;
    }
    getMonth() {
        return this.month;
    }
    getDay() {
        return this.day;
    }
}

module.exports = memberFormDto;