/*

A closure is a function that remembers its outer scope even after the outer function has finished executing.

Closures are a fundamental concept in JavaScript and are widely used in:

Data privacy (encapsulation)

Callbacks and event handlers

Functional programming

Memoization

*/

function outer() {
  let name = "JavaScript";

  function inner() {
    console.log(name); // ✅ Accesses outer variable
  }

  return inner;
}

const greet = outer(); // outer() returns inner
greet(); // "JavaScript"
