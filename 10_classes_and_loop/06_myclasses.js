// class user {
//     constructor (username, email, password) {
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword() { //This is know as methods
//         return `${this.password}abc`
//     }
//     changeUsername(){
//          return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai","chai@gamil.com","123")

// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());

// behind th screen
function user(username,email,password){
    this.username = username,
    this.email = email,
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const chai = new user("chai","chai@gmail.com","123")

console.log(chai.changeUsername());
console.log(chai.encryptPassword());

