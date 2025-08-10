//Function Hoisting
//Function declarations are hoisted, meaning you can use them before they’re defined.


sayHello(); // Works due to hoisting
function sayHello() {
  console.log("Hi there!");
}