// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i==5){
        // console.log("5 is the best number")
    }
    // console.log(element)
}

for (let i = 1;i<=10;i++){
    // console.log(`outer loop value:${i}`)
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+'*'+j +'='+ i*j);
    }
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}


// Break and continue 

for (let index = 0; index < 20; index++) {
    if(index == 5) {
        console.log('5 detected');
        break    //break stop the execution of code after the occurence of value 
    }
    console.log(index);

}

for (let index = 0; index < 20; index++) {
    if(index == 5) {
        console.log('5 detected');
        continue  //continue  skip the particular value after the occurence of value
    }
    console.log(index);

}