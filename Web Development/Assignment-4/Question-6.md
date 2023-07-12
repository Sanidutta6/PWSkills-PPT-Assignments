Template literals, introduced in ECMAScript 6 (ES6), provide a convenient way to work with strings in JavaScript by allowing string interpolation and multiline strings. Template literals are defined using backticks (\`) instead of single or double quotes.

Here's an overview of how to use template literals and their features:

**String Interpolation:**
- With template literals, you can embed variables or expressions within a string using the `${}` syntax.
- Inside the `${}`, you can include variables, expressions, or even function calls.
- Example:
  ```javascript
  const name = "Alice";
  const age = 25;

  console.log(`My name is ${name} and I am ${age} years old.`);
  // Output: "My name is Alice and I am 25 years old."
  ```

**Multiline Strings:**
- Template literals make it easy to create multiline strings without resorting to string concatenation or escape characters.
- Line breaks within a template literal are preserved, and no additional formatting is required.
- Example:
  ```javascript
  const message = `
    Hello,
    This is a multiline
    string using template literals.
  `;
  console.log(message);
  /*
    Output:
    Hello,
    This is a multiline
    string using template literals.
  */
  ```

**Expression Evaluation:**
- Template literals can contain expressions that are evaluated and embedded within the string.
- This allows for more dynamic and complex string construction.
- Example:
  ```javascript
  const a = 10;
  const b = 5;

  console.log(`The sum of ${a} and ${b} is ${a + b}.`);
  // Output: "The sum of 10 and 5 is 15."
  ```