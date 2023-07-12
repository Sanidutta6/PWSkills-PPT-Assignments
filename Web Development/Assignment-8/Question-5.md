In React, there are two main types of components: class components and function components. Here are the key differences between them:

1. **Syntax:**
- Class Components: Class components are JavaScript classes that extend the `React.Component` class. They use the `class` keyword and define methods such as `constructor()`, `render()`, and lifecycle methods like `componentDidMount()`.
- Function Components: Function components are JavaScript functions that accept props as input and return JSX (JavaScript XML) to define the component's UI. They are defined using the function declaration syntax.

2. **State Management:**
- Class Components: Class components have access to the state feature of React. The state is an object that stores component-specific data and can be updated using the `setState()` method. Class components can define and manage their state, allowing for dynamic and interactive UIs.
- Function Components: Initially, function components were stateless and didn't have their own state. However, with the introduction of React Hooks in React 16.8, function components can now use the `useState` hook to manage state. Hooks allow function components to have stateful logic and utilize React's state management capabilities.

3. **Lifecycle Methods:**
- Class Components: Class components have a range of lifecycle methods, such as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`. These methods can be overridden to execute code at specific points in the component's lifecycle.
- Function Components: Prior to React Hooks, function components didn't have lifecycle methods. However, with the introduction of Hooks, function components can use the `useEffect` hook to achieve similar functionality. The `useEffect` hook allows for executing code in response to component mounting, updating, and unmounting.

4. **Code Complexity:**
- Class Components: Class components can have a higher level of complexity, especially when dealing with lifecycle methods, managing state, and handling class-related syntax. They typically involve writing more code, such as defining a constructor, extending a class, and binding event handlers.
- Function Components: Function components, especially with the use of React Hooks, tend to be simpler and more concise. They involve writing pure JavaScript functions that accept props and return JSX. Function components are often easier to read, understand, and test.

5. **Performance:**
- Class Components: Class components have a slightly higher performance overhead compared to function components. This is because class components are created as instances of JavaScript classes, and React needs to manage and track their instances, state changes, and lifecycle methods.
- Function Components: Function components, especially with the use of React Hooks, have better performance optimizations. They don't have the overhead of class instances, making them faster to render and update.