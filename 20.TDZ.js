/*
The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and initialized, during which you cannot access it.

It applies to variables declared with let and const.


| Feature            | `var`                 | `let` / `const`         |
| ------------------ | --------------------- | ----------------------- |
| Hoisted?           | ✅ Yes                 | ✅ Yes                   |
| Initialized?       | ✅ As `undefined`      | ❌ No (TDZ exists)       |
| Access before init | ✅ Returns `undefined` | ❌ Throws ReferenceError |


*/

console.log(a); // ❌ ReferenceError
let a = 10;



console.log(b); // ✅ undefined
var b = 20;
