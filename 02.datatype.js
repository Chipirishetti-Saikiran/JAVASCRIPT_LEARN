//PRIMITIVE DATATYPES

/*
| Data Type   | Example                 | Description                      |
| ----------- | ----------------------- | -------------------------------- |
| `Number`    | `10`, `3.14`            | Integer or floating-point number |
| `String`    | `"hello"`, `'JS'`       | Text (in quotes)                 |
| `Boolean`   | `true`, `false`         | Logical true or false            |
| `undefined` | `let x;`                | Declared but not assigned        |
| `null`      | `let x = null;`         | Empty or non-existent value      |
| `BigInt`    | `12345678901234567890n` | Large integers (ES2020+)         |
| `Symbol`    | `Symbol("id")`          | Unique and immutable value       |
*/


/*
let name = "John";        // String
let age = 30;             // Number
let isStudent = true;     // Boolean
let x;                    // undefined
let y = null;             // null
let bigNum = 1234567890n; // BigInt
let sym = Symbol("id");   // Symbol
*/


//NON-PRIMITIVE


/*

| Data Type  | Example                    | Description                   |
| ---------- | -------------------------- | ----------------------------- |
| `Object`   | `{ name: "Sai", age: 25 }` | Collection of key-value pairs |
| `Array`    | `[1, 2, 3]`                | Ordered list of values        |
| `Function` | `function() {}`            | Block of reusable code        |

let person = { name: "Sai", age: 25 }; // Object
let numbers = [10, 20, 30];            // Array
function greet() { console.log("Hi"); } // Function

*/



/*

typeof 123;           // "number"
typeof "hello";       // "string"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" ✅ (quirk in JS)
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"

*/