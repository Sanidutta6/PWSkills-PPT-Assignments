import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import TodoCard from "./TodoCard";

const ShowTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const updateTodoStatus = (todoNo) => {
    const updatedTodos = [...todos];
    updatedTodos[todoNo-1].status = "Completed";
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  const handleDelete = (todoNo) => {
    const updatedTodos = todos.filter((_, index) => index + 1 !== todoNo);
    setTodos(updatedTodos);
  };

  return (
    <div className="px-16 grid grid-cols-3 gap-2">
      {todos &&
        Array.from(todos).map((todoObj, index) => {
          return (
            <TodoCard
              key={index}
              todoNo={index + 1}
              todo={todoObj.todo}
              status={todoObj.status}
              handleDelete={handleDelete}
              updateTodoStatus={updateTodoStatus}
            />
          );
        })}
    </div>
  );
};

export default ShowTodo;
