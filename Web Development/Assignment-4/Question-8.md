In ECMAScript 6 (ES6), one can destructure objects and arrays to easily extract values and assign them to variables. Destructuring allows for a more concise and readable way to access and work with the elements of arrays and properties of objects. Here's an overview of how to destructure objects and arrays in ES6:

**Destructuring Objects:**
- To destructure an object, one use curly braces `{}` and specify the property names one want to extract.
- The property names must match the object's property names.
- Example:
  ```javascript
  const person = {
    name: "Alice",
    age: 25,
    city: "New York",
  };

  // Destructuring assignment
  const { name, age, city } = person;

  console.log(name); // Output: "Alice"
  console.log(age); // Output: 25
  console.log(city); // Output: "New York"
  ```

**Destructuring Arrays:**
- To destructure an array, one use square brackets `[]` and specify the index positions of the elements one want to extract.
- The order of the variables corresponds to the order of the elements in the array.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  // Destructuring assignment
  const [first, second, third] = numbers;

  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(third); // Output: 3
  ```