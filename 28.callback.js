/*
✅ 1. Callback
A callback is a function passed into another function to be executed later, usually after an asynchronous operation completes.
*/
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function displayData() {
  console.log("Displaying data");
}

fetchData(displayData);
/*
Data fetched
Displaying data

*/