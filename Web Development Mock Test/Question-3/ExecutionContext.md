# Execution Context in JavaScript

In JavaScript, an execution context is an abstract concept that defines the environment in which JavaScript code is executed. It encompasses variables, functions, objects, and the scope chain, which collectively determine how the code is executed and how it interacts with its surrounding environment.

## Types of Execution Contexts

There are three main types of execution contexts:

1. **Global Execution Context**: The global execution context is the default or outermost context. It is created when the JavaScript code starts executing and remains active until the program terminates. In a web browser, the global execution context is associated with the global object, typically represented by the `window` object. All variables and functions declared outside of any function are part of the global execution context.

2. **Function Execution Context**: When a function is invoked, a new execution context is created for that function. Each function has its own execution context, which includes the function's arguments, local variables, and references to outer environments. Function execution contexts are pushed onto the call stack when the function is called and popped off the stack when the function finishes executing.

3. **Eval Execution Context**: The eval function in JavaScript allows for dynamic code evaluation. When `eval` is called, a new execution context is created for the evaluated code. The eval execution context is similar to a function execution context, but with some differences related to the scope chain.

## Execution Context Stack

The execution contexts form a hierarchical structure known as the execution context stack or call stack. The stack represents the order in which execution contexts are created and determines the currently executing code. The topmost execution context on the stack corresponds to the function that is currently being executed.

Here's a simplified diagram illustrating the concept of the execution context stack:

```
   Execution Context Stack (Call Stack)
  +-----------------------+
  |  Function Context 3   |  <--- Currently executing
  +-----------------------+
  |  Function Context 2   |
  +-----------------------+
  |  Global Context       |
  +-----------------------+
```

In the diagram, there are three execution contexts on the stack. The topmost context represents the function that is currently being executed, while the remaining contexts represent the functions that were called but are yet to complete. The global context is always at the bottom of the stack, representing the global scope.

## Scope and Variable Access

Each execution context has its own set of variables, function declarations, and a reference to the outer environment. This enables variable scoping, function closures, and access to variables from outer scopes. The scope chain determines the order in which variables are resolved during code execution.

Understanding execution contexts is crucial for comprehending how JavaScript code is executed, how variables are scoped, and how functions interact with their surrounding environment. It plays a vital role in analyzing the flow and behavior of code during runtime.

Please note that the diagram and explanation provided are for illustrative purposes and may not represent the exact internal workings of JavaScript engines. The concept of execution context, however, remains consistent across different JavaScript environments.