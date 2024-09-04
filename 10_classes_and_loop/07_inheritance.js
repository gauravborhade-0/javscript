class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USENAME is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai","chai@gamil.com","123")
chai.addCourse()

const masalachai = new user("masalachai")

masalachai.logMe()
console.log(chai instanceof user);
