import React, {useContext} from "react";
import TodoContext from "../Context/TodoContext";
import TodoCard from "./TodoCard";

const ShowTodo = () => {
  const todos = useContext(TodoContext)[0];

  return <div className="px-16 grid grid-cols-3 gap-2">
    {Array.from(todos).map((todoObj, index) => {
      return <TodoCard key={index} todoNo={index+1} todo={todoObj.todo} status={todoObj.status} />;
    })}
  </div>;
};

export default ShowTodo;
