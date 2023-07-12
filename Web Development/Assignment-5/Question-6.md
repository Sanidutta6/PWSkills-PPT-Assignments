Promises are objects in JavaScript used for handling asynchronous operations. They represent the eventual completion or failure of an asynchronous operation and allow you to write asynchronous code in a more structured and readable manner. Promises have three states: pending, fulfilled, or rejected.

The three main methods associated with Promises are:

**1. `then()`:**
The `then()` method is used to handle the fulfillment and chaining of Promises. It takes two optional arguments: a success callback and an error callback. The success callback is executed when the Promise is fulfilled, and the error callback is executed when the Promise is rejected.

```javascript
promiseObject
  .then(successCallback, errorCallback)
  .then(anotherSuccessCallback)
  .catch(errorCallback);
```

- Example:
```javascript
const fetchUserData = new Promise((resolve, reject) => {
  // Simulating an async operation
  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    resolve(data); // Fulfill the Promise with data
    // reject(new Error("Failed to fetch user data")); // Reject the Promise with an error
  }, 2000);
});

fetchUserData
  .then((data) => {
    console.log(data); // Output: { name: "Alice", age: 25 }
  })
  .catch((error) => {
    console.log(error); // Handle error if Promise is rejected
  });
```

**2. `catch()`:**
The `catch()` method is used to handle the rejection of a Promise. It is similar to the error callback in the `then()` method, but it specifically handles errors thrown during the Promise chain.

```javascript
promiseObject.catch(errorCallback);
```

- Example:
```javascript
fetchUserData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); // Output: Error: Failed to fetch user data
  });
```

**3. `finally()`:**
The `finally()` method is used to specify a callback function that is executed regardless of whether the Promise is fulfilled or rejected. It allows you to perform cleanup or finalization tasks after the Promise completes.

```javascript
promiseObject.finally(callback);
```

- Example:
```javascript
fetchUserData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise complete"); // Output: "Promise complete" regardless of fulfillment or rejection
  });
```

These Promise methods provide powerful ways to handle the fulfillment, rejection, and cleanup of asynchronous operations. By chaining `then()`, `catch()`, and `finally()` methods, you can create a more organized flow of handling Promises and their results, leading to more maintainable and readable asynchronous code.