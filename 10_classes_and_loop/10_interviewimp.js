// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5            //we can'it change the value of pi because of its proberties are hardcoded
// console.log(Math.PI);

const chai = {
    name :'ginger chai',
    price : '250',
    isAvailable :true,

    orderchai:function(){
        cobninsole.log("chai nhi ");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{      //if we make  this property  on object then it is not iterable
    writable :false,    
    enumerable :false,
    configurable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));



for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);        
    }
}