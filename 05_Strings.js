const name = "gaurav"
const repoCount = 50

console.log(`Hello my name is ${name} an my repo count is ${repoCount}`);


const gameName = new String('gaurav')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0.-2)
console.log(anotherString);


const newStringOne = "   Gaurav    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gameName.split(''));