/*s
cope in JavaScript — Made Simple

**Scope** in JavaScript defines **where variables can be accessed** or **referenced** in your code.

---


#### 1. **Global Scope**

* Variables declared **outside** of any function/block.
* Accessible **everywhere** in your code.

*/
var globalVar = "I am global";

function show() {
  console.log(globalVar); // ✅ Accessible
}
show();

/*
---

#### 2. **Function Scope**

* Variables declared **inside a function** using `var`, `let`, or `const` are only accessible **within that function**.

*/
function greet() {
  let msg = "Hello";
  console.log(msg); // ✅ Accessible
}
greet();

console.log(msg); // ❌ ReferenceError


/*

#### 3. **Block Scope (with `let` and `const`)**

* `let` and `const` are block-scoped — they exist **only inside `{}` blocks**.

*/
{
  let x = 5;
  const y = 10;
  console.log(x, y); // ✅ Accessible
}

console.log(x, y); // ❌ ReferenceError



//ar` is **not** block-scoped — it's **function-scoped**:

{
  var z = 100;
}
console.log(z); // ✅ 100


/*
// **Lexical (Static) Scope**

* JavaScript uses **lexical scope**, meaning scope is determined by **where variables/functions are written**, not where they are called.

*/
function outer() {
  let name = "JS";

  function inner() {
    console.log(name); // ✅ Has access to outer's scope
  }

  inner();
}
outer();

/*

### 🔄 Scope Chain

When a variable is accessed, JavaScript looks:

1. In the **local scope**
2. Then moves **up** through **outer scopes**
3. Until it reaches the **global scope**

---

### 🧪 Example of Scope Chain

*/
let a = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(a, b, c); // ✅ 1, 2, 3
  }

  inner();
}

outer();


/*
### 🧷 Summary Table:

| Scope Type | Created By                    | Accessible Where?                   |
| ---------- | ----------------------------- | ----------------------------------- |
| Global     | Code outside all functions    | Anywhere in the script              |
| Function   | Inside a function             | Only inside that function           |
| Block      | Inside `{}` using `let/const` | Only inside the block               |
| Lexical    | Nested functions              | Can access outer function variables |

*/