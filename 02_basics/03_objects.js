//singleton
//object.create

//object literals

const mysym = Symbol("Kel1")


const jsuser = {
    name: "Hitesh",
    "full name": "Hitesh choudhary",
    [mysym]: "mykey1",  //we can use this to use symbol in the object
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLogged:false,
    lastLoginDays: ["monday","saturday"]
} 


// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])


jsuser.email = "gaurav@chatgpt.com"
// object.freeze(jsuser) //If we declared like this we cannot change the value of the object
jsuser.email = "gaurav@microsoft.com"
// console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello jsuser");
}

jsuser.greetingtwo = function(){
    console.log(`Hello jsuser, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());