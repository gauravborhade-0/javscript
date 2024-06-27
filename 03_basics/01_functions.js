function sayMyName(){
    console.log("G");
    console.log("a")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("v")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     connsole.log(number1,number2);
// }

function addTwoNumber(number1,number2){
    let result = number1 +number2
    return result     //by using console we cant use function in variable we should use return
}

const result  = addTwoNumber(2,2) 

// console.log("Result:",result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage(""))

const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username:"sam",
    price:299,
})

const myNewArray = [200,400,800,1600,3200]

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray))