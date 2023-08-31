//Arrow functions

//classic arrow function

const somma = (p1, p2) => {
    return p1 + p2
}

//arrow funciton with only one parameter

const one_arg = arr1 => {
    return arr1 * 2
}

//arrow function with one line

const one_line = (arg1, arg2) => arg1 * arg2

//arrow function with one line and one parameter

const one_line_one_arg = x => x + 3

// .filter

//let new_array = arr.filter(callback)

let myArr = new Array(1,3,5,9,2);

let new_array = myArr.filter(x => x > 5);

console.log(new_array);

// .foreach

let arrayEach = myArr.forEach(x => console.log(x));

// fetch

// api: JBJxONxUYfAlWR2Wx65hSLPMhENVdXCeYi7l0hW24rzCoV0xE32P9YrW

function getData() {
    return fetch('https://api.pexels.com/v1/curated', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'JBJxONxUYfAlWR2Wx65hSLPMhENVdXCeYi7l0hW24rzCoV0xE32P9YrW'
        }
    })
}

getData()
    .then( res => console.log('Response ', res) )
    .catch( err => console.log('Error ', err) )
    .finally( () => console.log('Finally') )