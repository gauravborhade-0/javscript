// for in loop is used for object ,and for of loop is used for array (their are other method also for array)

//["","",""]
//[{}, {} ,{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {   //we can use for of loop for array
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings){
    if (greet == " ") {
        continue
    }
    // console.log(`EAch char is ${greet}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America" )
map.set('FR',"France")
map.set('IN',"India")    //in map the values are not repeated

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-' ,value);
}
const myObject = {
    game1:'NFS',
    game2:'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,":-",value);  //wecan't iter object using the for in loop
}