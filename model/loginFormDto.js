class loginFormDto{
    constructor(data){
        this.email = data.email;
        this.password = data.password;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
    setPassword(cryptedPw){
        this.password = cryptedPw;
        return true;
    }

}

module.exports = loginFormDto;