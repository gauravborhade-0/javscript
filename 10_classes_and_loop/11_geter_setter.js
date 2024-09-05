class user {
    constructor(email,password){
        this.email = email;
        this.password = password;

    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email =value 
    }

    get password(){
        return `${this._password}Gaurav`
    }

    set password(value){
        this._password =value 
    }
}

const chai = new user ("c@gamil.com","abc")
console.log(chai.password);
