//primitive datatypes

// types 7 - string , number , boolean, null , undefined , bigInt , symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const  symbolId = Symbol('123')

console.log(id == symbolId);

const bigNumber = 348279238974904691238097n

//Reference(non primitive)

// Array,objects,functions

const heros = ["shaktiman", "naagraj", "dogo"];
let myobj = {
    name:"Gaurav",
    age:22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof symbolId);

//https://262.ecma-international.org/5.1/#sec-11.4.3