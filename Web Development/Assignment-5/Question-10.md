To define an asynchronous function in JavaScript using `async/await`, one need to use the `async` keyword before the function declaration. This keyword tells JavaScript that the function contains asynchronous code and should return a Promise.

Here's the syntax for defining an asynchronous function using `async/await`:

```javascript
async function functionName() {
  // Asynchronous code using await
}
```

Here's an example of an asynchronous function that retrieves data from an API using `fetch`:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

In this example, the `fetchData` function is declared as an asynchronous function using the `async` keyword. Inside the function, the `await` keyword is used to pause the execution and wait for the `fetch` operation to complete. The response is then converted to JSON using `response.json()`, and the resulting data is returned.

The `try/catch` block is used to handle any errors that may occur during the asynchronous operations. If an error occurs, it is caught in the `catch` block, logged to the console, and then re-thrown to propagate the error to the caller of the function.

By defining a function as asynchronous using `async`, one can use `await` to pause the execution of the function until asynchronous operations are completed, making the code appear more synchronous and easier to read and reason about.