/*
⏳ 1. setTimeout()
Executes a function once after a specified delay (in milliseconds).
*/

//syn:setTimeout(function, delay);

console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

/*
Start
End
Executed after 2 seconds
*/




/*
2. clearTimeout()
Cancels a setTimeout() before it executes.
*/
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);




/*
 parseFloat()
Converts a string to a floating-point number.
*/
const str = "3.14159";
const num = parseFloat(str);

console.log(num); // 3.14159




/*
4. setInterval()
Executes a function repeatedly at fixed intervals (in milliseconds).
*/
//syn:setInterval(function, delay);
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

/*
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

*/


/*
5. clearInterval()
Cancels a repeating task scheduled with setInterval().
*/





/*
| Function          | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `setTimeout()`    | Run code once after delay                 |
| `clearTimeout()`  | Cancel a scheduled timeout                |
| `setInterval()`   | Run code repeatedly at fixed intervals    |
| `clearInterval()` | Stop a scheduled interval                 |
| `parseFloat()`    | Convert string to a floating-point number |
*/