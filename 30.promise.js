/*

🟨 3. Promises
A Promise is an object representing the eventual completion or failure of an async operation.

| State       | Meaning                          |
| ----------- | -------------------------------- |
| `pending`   | Operation is in progress         |
| `fulfilled` | Operation completed successfully |
| `rejected`  | Operation failed                 |
*/

//creating a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});


//consuming promises'
//using .then() and .catch()

myPromise
  .then(result => {
    console.log(result); // Operation Successful
  })
  .catch(error => {
    console.log(error); // Operation Failed
  });
