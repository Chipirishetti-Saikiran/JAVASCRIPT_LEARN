//The Call Stack in JavaScript is a data structure that keeps track of function calls in your program — like a to-do list for the JavaScript engine.

/*

🔁 How it Works (LIFO – Last In, First Out)
Think of it like stacking plates:

The last function that was called is the first one to finish and get removed (popped) from the stack.
*/

function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

/*
🧠 What happens in the Call Stack?
first() is called → pushed onto the stack

Inside first(), second() is called → pushed

Inside second(), third() is called → pushed

third() finishes → popped

second() finishes → popped

first() finishes → popped

*/