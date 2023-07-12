The `useState` hook is one of the most commonly used hooks in React. It allows functional components to have their own state, enabling them to manage and update data within the component. The `useState` hook returns a state variable and a function to update that state.

Here's the basic syntax of the `useState` hook:

```jsx
const [state, setState] = useState(initialValue);
```

The `useState` hook takes an initial value as an argument and returns an array with two elements:
1. `state`: This is the current value of the state variable. It initially holds the provided `initialValue` and can be updated using the `setState` function.
2. `setState`: This is a function used to update the state. When called, it re-renders the component and updates the value of the state variable.

Here's an example that demonstrates the usage of `useState`:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In the above example, the `Counter` component uses the `useState` hook to define a state variable called `count` with an initial value of 0. The `setCount` function is used to update the `count` state.

By using the `useState` hook, you can achieve the following with functional components:
1. State Management: You can create and manage local state within a functional component, allowing you to store and update data specific to that component.
2. Reactive Updates: When the state is updated using the `setState` function, React re-renders the component, reflecting the changes in the UI.
3. Multiple State Variables: You can use the `useState` hook multiple times within a single component to manage different independent state variables.
4. Simplicity and Readability: The `useState` hook simplifies the syntax and logic required to handle state in functional components, making the code more concise and easier to understand.

Using the `useState` hook, you can achieve similar functionality as class components with state, but with the simplicity and readability of functional components.