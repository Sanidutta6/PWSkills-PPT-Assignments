import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import ShowTodo from "./Components/ShowTodo";
import TodoContext from "./Context/TodoContext";
import "./App.css";

function App() {
  const TodoHook = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#621877] to-black">
      <TodoContext.Provider value={TodoHook}>
        <AddTodo />
        <ShowTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
