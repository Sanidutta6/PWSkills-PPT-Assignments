In React, there are several ways to pass data from one component to another component. The approach you choose depends on the component relationship and the specific use case. Here are some common methods for passing data between components:

1. **Props:**
   - Parent-to-Child: The parent component can pass data to a child component by including it as a prop when rendering the child component. The child component can then access and use the data passed via props.
   - Example:
   ```jsx
   // Parent Component
   function ParentComponent() {
     const data = "Hello from parent!";
     return <ChildComponent data={data} />;
   }
   
   // Child Component
   function ChildComponent({ data }) {
     return <p>{data}</p>;
   }
   ```

2. **Context API:**
   - Context allows you to share data between components without passing props explicitly through each level of the component tree. It is useful when data needs to be accessed by multiple components at different levels of the component hierarchy.
   - Example:
   ```jsx
   // Create a context
   const MyContext = React.createContext();
   
   // Parent Component as Context Provider
   function ParentComponent() {
     const data = "Hello from parent!";
     return (
       <MyContext.Provider value={data}>
         <ChildComponent />
       </MyContext.Provider>
     );
   }
   
   // Child Component as Context Consumer
   function ChildComponent() {
     const data = useContext(MyContext);
     return <p>{data}</p>;
   }
   ```

3. **State Management Libraries:**
   - State management libraries like Redux or MobX can be used to manage and share data across multiple components. These libraries provide a global state that can be accessed from any component in the application.
   - Example (using Redux):
   ```jsx
   // Define Redux store and actions
   
   // Parent Component
   function ParentComponent() {
     const data = "Hello from parent!";
     store.dispatch({ type: 'SET_DATA', payload: data });
     return <ChildComponent />;
   }
   
   // Child Component
   function ChildComponent() {
     const data = useSelector(state => state.data);
     return <p>{data}</p>;
   }
   ```

These are some common methods for passing data between components in React. The choice of approach depends on the component relationship, complexity of the data, and the specific requirements of your application.