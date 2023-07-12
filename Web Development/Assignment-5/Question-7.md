The `async` and `await` keywords in JavaScript are used together to simplify and handle asynchronous code in a more synchronous and readable manner. Introduced in ECMAScript 2017 (ES8), they provide a syntactical approach to work with Promises, making asynchronous code appear more like traditional synchronous code.

**1. `async` Keyword:**
- The `async` keyword is used to define an asynchronous function.
- When an async function is called, it always returns a Promise.
- Inside an async function, one can use the `await` keyword to pause the execution and wait for the resolution of a Promise before proceeding further.
- Syntax:
```javascript
async function functionName() {
  // Async code
}
```
- Example:
```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 2000);
  });
}

async function processAsyncData() {
  const data = await fetchData(); // Wait for the Promise to resolve
  console.log(data); // Output: "Async data" after a 2-second delay
}

processAsyncData();
```

**2. `await` Keyword:**
- The `await` keyword can only be used inside an `async` function.
- It pauses the execution of the `async` function until the Promise passed to `await` is resolved or rejected.
- If the Promise is resolved, the `await` expression returns the resolved value.
- If the Promise is rejected, an exception is thrown, which can be caught using `try/catch` blocks.
- Syntax:
```javascript
const result = await promise;
```
- Example:
```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 2000);
  });
}

async function processAsyncData() {
  try {
    const data = await fetchData(); // Wait for the Promise to resolve
    console.log(data); // Output: "Async data" after a 2-second delay
  } catch (error) {
    console.log(error); // Handle any errors if the Promise is rejected
  }
}

processAsyncData();
```

The `async/await` syntax simplifies working with Promises and helps avoid the complexities of nested callbacks or Promise chains. It allows one to write asynchronous code in a more sequential and readable way, resembling synchronous code. However, it's important to note that `await` can only be used inside an `async` function, and using `await` outside of an `async` function will result in a syntax error.