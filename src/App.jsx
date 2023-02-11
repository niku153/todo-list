import React, { useState } from "react";

//Components
import ToDoForm from "./components/TodoForm/TodoForm";
import ToDoItem from "./components/TodoItem/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "do this",
      isCompleted: false,
    },
    {
      text: "do that",
      isCompleted: false,
    },
    {
      text: "do another thing",
      isCompleted: false,
    },
  ]);

  //Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
