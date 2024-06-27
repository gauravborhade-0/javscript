var a = 100
var c = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30  //if we declared var keyword inside the blocks then we can access it from outside of the block this create a many bug in program so we should use let pr const 
    // console.log("Inner:",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "Gaurav"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //=>we can't use this because this is out scope
}

// console.log(username);

//++++++++++++++++++++++++intresting++++++++++++++++++

console.log(addone(5))  //we can access function if we are trying to access it before initilization but we declared a function inside a variable we access it before initilization

function addone(num) {
    return num + 1
}



const addTwo = function(num){
    return num +2
}

console.log( addTwo(5)) 