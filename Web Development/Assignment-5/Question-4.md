In JavaScript, you can handle asynchronous code using various techniques and patterns to ensure proper execution and handling of async operations. Here are some common approaches:

**1. Callbacks:**
- Callbacks are a traditional way to handle asynchronous code in JavaScript.
- You pass a function (callback) as an argument to an async operation, and that function is invoked when the operation completes.
- Example:
  ```javascript
  function fetchData(callback) {
    // Simulating async operation
    setTimeout(() => {
      const data = "Async data";
      callback(data);
    }, 2000);
  }

  function processData(data) {
    console.log(data);
  }

  fetchData(processData); // Output: "Async data" after a 2-second delay
  ```

**2. Promises:**
- Promises are a more modern and preferred way of handling async code introduced in ECMAScript 6 (ES6).
- Promises represent the result of an async operation that can be fulfilled with a value or rejected with an error.
- They allow chaining of async operations and provide more structured error handling using `then()` and `catch()` methods.
- Example:
  ```javascript
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating async operation
      setTimeout(() => {
        const data = "Async data";
        resolve(data);
        // reject(new Error("Async error")); // For handling error
      }, 2000);
    });
  }

  fetchData()
    .then((data) => {
      console.log(data); // Output: "Async data" after a 2-second delay
    })
    .catch((error) => {
      console.log(error); // Handle error if rejected
    });
  ```

**3. Async/Await:**
- Async/await is a syntactical feature introduced in ES8 (ES2017) that simplifies working with Promises.
- It allows you to write async code in a synchronous-looking style, making it easier to read and reason about.
- The `async` keyword is used to define an async function, and `await` is used to pause the execution and wait for a Promise to resolve or reject.
- Example:
  ```javascript
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating async operation
      setTimeout(() => {
        const data = "Async data";
        resolve(data);
        // reject(new Error("Async error")); // For handling error
      }, 2000);
    });
  }

  async function processAsyncData() {
    try {
      const data = await fetchData();
      console.log(data); // Output: "Async data" after a 2-second delay
    } catch (error) {
      console.log(error); // Handle error if rejected
    }
  }

  processAsyncData();
  ```

These techniques provide different ways to handle asynchronous code in JavaScript. Promises and async/await are commonly preferred due to their improved readability, error handling, and ability to handle complex async flows. However, callbacks are still widely used, especially in older codebases or situations where compatibility with older browsers is required.