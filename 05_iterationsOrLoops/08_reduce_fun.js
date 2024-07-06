// const myNums = [1,2,3]

// const myTotal = myNums.reduce(  (accumulator,currentValue) =>{
//     return accumulator+currentValue },0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },

    {
        itemName:"py course",
        price:999
    },

    {
        itemName:"mobile development course",
        price:5999
    },

    {
        itemName:"data science course",
        price:12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => {
    return acc+item.price},0)


console.log(totalPrice);