//const tinderUser = new Object() =>by this methon we can create onyl single object only
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gaurav",
            lastname: "Borhade"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser)

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {3:"c",4:"d",5:"e"} 
const obj4 = {6:"f",7:"g"}

//ways to combine obj
// const obj3 = {obj1,obj2}  =>not a good way to assign
// const obj3 = Object.assign({},obj1,obj2,obj4) 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [         //we get data int this form from an database(only for example)
    {
        id:1,
        email:"gaurav.gmail.com"
    },
    {
        id:1,
        email:"gaurav@gmail.com"
    },
    {
        id:1,
        email:"gaurav@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//shows result in form of array

// console.log(tinderUser.hasOwnProperty("name")); //it is use to show that an key has its own value or not

const  course = {
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor:instructor}= course

//console.log(courseInstructor);
console.log(instructor);
