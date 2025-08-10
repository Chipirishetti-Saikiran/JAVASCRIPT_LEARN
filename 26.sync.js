/*
Synchronous Programming in JavaScript
Synchronous programming means code is executed line by line, one after the other. Each operation must complete before the next one starts.

🔹 Characteristics of Synchronous Code
Blocking – each line waits for the previous one to finish.

Sequential Execution – operations happen one after another.

Simple to Understand – follows a top-to-bottom logic flow.
*/

console.log("Start");

function greet() {
    console.log("Hello, World!");
}

greet();

console.log("End");

/*
Start
Hello, World!
End
*/