In ECMAScript 6 (ES6), one can define default parameter values for function parameters, which allows one to specify default values that are used when no argument is provided or when an argument is explicitly passed as `undefined`. Here's how one can define default parameter values in ES6 functions:

**Syntax:**
```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2, ...) {
  // Function body
}
```

**Example 1:**
```javascript
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Anonymous!"
greet("Alice"); // Output: "Hello, Alice!"
```

In the example above, the `greet()` function has a single parameter `name` with a default value of `"Anonymous"`. When the function is called without passing any argument, the default value is used. When an argument is explicitly provided, it overrides the default value.

**Example 2:**
```javascript
function addNumbers(a, b = 0) {
  return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8
console.log(addNumbers(10)); // Output: 10 (default value of b is used)
```

In this example, the `addNumbers()` function has two parameters, `a` and `b`, with a default value of `0` for `b`. When the function is called with two arguments, both values are used in the addition. When the function is called with only one argument, the default value of `b` is used, resulting in adding the first argument with `0`.

Default parameter values in ES6 functions provide a convenient way to handle missing or undefined arguments by assigning default values. They allow one to write more concise and flexible functions without explicitly checking for undefined values.