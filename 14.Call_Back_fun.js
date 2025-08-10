//A function passed as an argument to another function.


function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greetUser("Sai", sayBye);