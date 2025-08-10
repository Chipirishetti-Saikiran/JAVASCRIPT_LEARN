/*
Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before code execution.

| Type            | Hoisted? | Initialized to?         |
| --------------- | -------- | ----------------------- |
| `var`           | ✅ Yes    | `undefined`             |
| `let` / `const` | ✅ Yes    | ❌ Not initialized (TDZ) |
| Functions       | ✅ Yes    | ✅ Fully hoisted         |


| Declaration Type     | Hoisted?    | Usable Before Declaration? |
| -------------------- | ----------- | -------------------------- |
| `var`                | ✅ Yes       | ✅ Yes (but as `undefined`) |
| `let` / `const`      | ✅ Yes       | ❌ No (TDZ error)           |
| Function Declaration | ✅ Yes       | ✅ Yes                      |
| Function Expression  | ✅ Partially | ❌ No                       |

*/