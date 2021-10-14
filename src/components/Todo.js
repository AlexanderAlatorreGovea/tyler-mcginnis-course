import React, { useState } from "react";

function generateId() {
  return "_" + Math.random().toString(32).substr(2, 9);
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((prevTodos) =>
      prevTodos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
