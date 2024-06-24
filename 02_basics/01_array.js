//array 

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArray = new Array(1,2,3,4,5)//be can declared an array in this type also
// console.log(myArr[1]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(7);

// myArr.unshift(10)
// myArr.shift(10)
// console.log(myArr)

// const newArr = myArr.join()  //it add the value in form of string
// console.log(myArr);
// console.log(newArr)


//slice, splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr);


const myn2 = myArr.splice(1,3) //splice manipulate the orignal array and slice doesn't
console.log("c",myArr);
console.log(myn2);