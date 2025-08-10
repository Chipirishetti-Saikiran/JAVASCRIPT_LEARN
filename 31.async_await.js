/*
🔁 5. Async/Await (Modern & Cleaner Syntax)
Allows you to write asynchronous code as if it were synchronous, making it easier to read.

🔹 Example:
*/

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function showData() {
  console.log("Start");
  const data = await getData();  // waits here
  console.log(data);
  console.log("End");
}

showData();

/*
Start
Data Loaded
End
*/


/*

| Feature        | Callback           | Promise            | Async/Await         |
| -------------- | ------------------ | ------------------ | ------------------- |
| Syntax         | Nested             | Chainable          | Cleaner, top-down   |
| Readability    | Poor with nesting  | Better             | Best                |
| Error Handling | Separate (manual)  | `.catch()`         | `try...catch` block |
| Use Case       | Simple async tasks | More complex logic | Most modern JS code |


*/