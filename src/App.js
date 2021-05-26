import "./App.css";
import { Footer } from "./MyComponents/Footer";
import Navbar from "./MyComponents/Navbar";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else initTodo = JSON.parse(localStorage.getItem("todos"));

  let onDelete = (item) => {
    setTodos(
      todos.filter((e) => {
        return e !== item;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let addTodo = (task) => {
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      desc: task,
    };
    setTodos([...todos, myTodo]);
    console.log(task);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Navbar title="THE TODO'S APP" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDeleteAction={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
