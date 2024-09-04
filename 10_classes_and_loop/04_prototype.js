let myName = "Gaurav   "
let myChannel = "chai         "

console.log(myName.tureLength);

let myHeros = ["thor","spiderman"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Gaurav = function(){
    console.log(`Gaurav is present in all objects`);
}

Array.prototype.heyGaurav = function(){
    console.log('Gaurav is present in all objects');
}

heropower.Gaurav()
myHeros.Gaurav()
myHeros.heyGaurav()

// inheritance
// old ways

const user = {
    name:"chai",
    email:"cahi@gamil.com"
}

const Teacher = {
    makevideo:true
}

const Teachingsupport ={
    isAvailable:false
}

const TASupport = {
    makeAssignment :'js assignment',
    fullTime : true,
    __proto__:Teachingsupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(Teachingsupport,Teacher)

let anotherUsername = "chaiAurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Gaurav".trueLength()
"Borhade".trueLength()