Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that you can use variables and functions before they are actually declared in your code.

Here are a few key points to understand about hoisting:

1. **Variable Hoisting:**
   - Variable declarations (not assignments) are hoisted to the top of their scope.
   - Variables declared with `var` are hoisted and initialized with a value of `undefined` by default.
   - Example:
     ```javascript
     console.log(myVariable); // undefined
     var myVariable = 10;
     ```

2. **Function Hoisting:**
   - Function declarations are hoisted entirely, including both the function name and its body.
   - Function declarations can be called before they appear in the code.
   - Example:
     ```javascript
     myFunction(); // "Hello, world!"
     function myFunction() {
       console.log("Hello, world!");
     }
     ```

3. **Hoisting Scope:**
   - Hoisting occurs at the level of the current scope. Variables and functions are hoisted to the top of their respective scopes.
   - In nested scopes, variables declared with `var` are hoisted to the top of their immediate scope, not the global scope.
   - Example:
     ```javascript
     function outer() {
       console.log(innerVariable); // undefined
       var innerVariable = 20;
     }
     outer();
     ```

4. **Variable Assignment vs. Declaration:**
   - Only variable declarations are hoisted, not assignments.
   - Assignments happen in the order they appear in the code.
   - Example:
     ```javascript
     var myVariable = 10;
     console.log(myVariable); // 10
     myVariable = 20;
     console.log(myVariable); // 20
     ```