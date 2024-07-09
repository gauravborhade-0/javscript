const form = document.querySelector('form');

form.addEventListener('submit',  function (e) {
    e.preventDefault(); //It will help you to stop the default events

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if (height =='' || height <0 || isNaN(height)){
        results.innerHTML = `Please Enter a Valid Height ${height}`
    }else if (weight =='' || weight <0 || isNaN(weight)) {
        results.innerHTML = `please enter a valid weight ${weight}`
    }else{
        const bmi = (weight /((height * height)/10000)).toFixed(2)

        if (bmi <18.6) {
            guide.innerHTML = 'you are under weight'
        }else if(bmi>18.6 && bmi<24.9){
            guide.innerHTML = 'your weight is normal'
        }else if(bmi>24.9){
            guide.innerHTML = 'you are overweighted'
        }
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})