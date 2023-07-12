The main difference between `map()` and `forEach()` in JavaScript is that `map()` creates a new array with the results of calling a provided function on every element in the original array, while `forEach()` executes a provided function once for each element in the original array but does not create a new array.

Here's a breakdown of their differences:

**map():**
- `map()` iterates over each element of an array and applies a callback function to each element, creating a new array with the results.
- The callback function passed to `map()` can have three arguments: the current element being processed, its index, and the original array.
- The return value of the callback function is added to the new array.
- The original array remains unchanged.
- `map()` returns a new array with the same length as the original array.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => number * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  ```

**forEach():**
- `forEach()` executes a provided function once for each element in an array.
- The callback function passed to `forEach()` can have three arguments: the current element being processed, its index, and the original array.
- `forEach()` does not return a new array. It simply executes the provided function on each element of the original array.
- The original array remains unchanged.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach((number) => {
    console.log(number * 2);
  });
  // Output:
  // 2
  // 4
  // 6
  // 8
  // 10
  ```