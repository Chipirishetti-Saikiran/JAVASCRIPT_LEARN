/*
2. Callback Hell
When callbacks are nested inside callbacks in a pyramid-like structure, making the code hard to read and maintain.
*/
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

/*
🔴 Problems:

Hard to read

Hard to debug

Difficult to handle errors

✅ Solution: Use Promises or Async/Await

*/