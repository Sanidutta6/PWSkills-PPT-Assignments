The main difference between `let` and `const` in JavaScript is that `let` allows for variable reassignment, while `const` creates a variable with a constant, or read-only, value that cannot be reassigned. Here's a breakdown of their differences:

**let:**
- Variables declared with `let` have block scope, meaning they are limited to the block (enclosed within curly braces) where they are defined.
- `let` allows for variable reassignment, meaning one can assign a new value to the variable after its initial declaration.
- Example:
  ```javascript
  let myVariable = 10;
  myVariable = 20; // Variable reassigned
  ```

**const:**
- Variables declared with `const` also have block scope, similar to `let`.
- `const` creates a variable with a constant value, meaning it cannot be reassigned once it has been assigned a value.
- The value assigned to a `const` variable is read-only, but it does not make the variable itself immutable. For example, if the `const` variable holds an object or an array, the properties or elements of that object or array can still be modified.
- Example:
  ```javascript
  const myConstant = 10;
  myConstant = 20; // Error: Assignment to constant variable
  ```

It's important to note that while `const` variables cannot be reassigned, their values can still be mutated if they hold objects or arrays. To ensure immutability, one would need to use techniques such as object freezing or deep copying.