const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')  //Both method are same use to access element

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date
}, 2000);