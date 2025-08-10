/*

Higher-Order Functions in JavaScript
A higher-order function (HOF) is a function that either:

Takes one or more functions as arguments, or

Returns a function as its result.

This is a powerful feature in JavaScript, especially in functional programming.

*/


 //1. Passing a Function as an Argument (Callback)

function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  let name = "Saikiran";
  console.log(callback(name));
}

processUserInput(greet);


// 2. Returning a Function from Another Function

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


//3. Common Built-in Higher-Order Functions

//✅ forEach()
//Executes a callback for each element.


[1, 2, 3].forEach(function (num) {
  console.log(num * 2);
});

//✅ map()
//Creates a new array by applying a function to each element.

let arr = [1, 2, 3];
let squared = arr.map(x => x * x);
console.log(squared); // [1, 4, 9]



//✅ filter()
//Returns a new array with elements that pass a test.


let nums = [1, 2, 3, 4, 5];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]


//✅ reduce()
//Reduces array to a single value.

let sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);
console.log(sum); // 10