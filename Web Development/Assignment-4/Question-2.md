The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when accessing a variable before it is declared but within its scope. During the TDZ, accessing the variable results in a runtime error, specifically a `ReferenceError`.

Here are a few key points to understand about the Temporal Dead Zone:

1. **Variable Declarations and Initialization:**
   - When using `let` and `const` to declare variables, the variable exists in the scope where it is declared, but it is not accessible until the point of initialization.
   - The TDZ begins at the start of the scope and continues until the variable is declared and assigned a value.

2. **Accessing Variables in the TDZ:**
   - Attempting to access a variable within the TDZ results in a `ReferenceError`.
   - The TDZ serves as a safeguard to catch potential errors caused by accessing variables before they are initialized.

3. **Block Scoping:**
   - Variables declared with `let` and `const` are block-scoped, meaning they are limited to the block where they are defined.
   - The TDZ applies within each block scope, such as a block within a function or a loop.

Example 1:
```javascript
console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
let myVariable = 10;
```

In this example, accessing `myVariable` before its declaration and initialization results in a `ReferenceError`. The TDZ exists from the start of the scope until the line where `myVariable` is declared and assigned a value.

Example 2:
```javascript
function example() {
  console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
  let myVariable = 10;
}
example();
```

In this example, the TDZ applies within the scope of the `example()` function. Accessing `myVariable` before its declaration and initialization inside the function results in a `ReferenceError`.