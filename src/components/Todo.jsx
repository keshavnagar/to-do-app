import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function HandleClick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(" ");
  }
  return (
    <>
      <form onSubmit={HandleClick}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
       <TodoItem  key={item} item = {item}/>
      ))}
    </>
  );
};

export default Todo;
