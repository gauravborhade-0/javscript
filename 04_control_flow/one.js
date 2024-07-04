// const isUserloggedin = true
// const temperature = 41

// if (temperature === 40){
//     console.log("les than 50");
// }else{
//     console.log("temperature is greature than 50");
// }

// console.log("execute");
//<,>,<=,>=,==,!=,===,!==

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`user power:${power}`);
// }


// console.log(`user power:${power}`); //we cannot accesed it outside the scope


const balance = 1000
// if(balance >500) console.log("test"), //not recommended to use like this 
//         console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900")
} else if (balance < 1200) {
    console.log("less than 1200");
}

const isUserloggedin = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedin && debitcard &&2==3) {
    console.log("alloy to buy the course");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
}1