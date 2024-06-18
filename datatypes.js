let score = "23bs"
console.log(typeof score)
let convertScore= Number(score)
console.log(typeof convertScore)
console.log(convertScore)

//"33" => convert to 33
//"33abc" => get value nan
//we can also convert number into string using String

let isLogged = 0
let boolislogged = Boolean(isLogged)
console.log(boolislogged)
console.log(isLogged)

//1 => true  ,0 => false
//"" = > fale , "Gaurav" => true

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)

//prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
