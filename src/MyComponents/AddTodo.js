import React from "react";
import './AddTodo.css';
import { useState } from 'react';

export const AddTodo = (props) => {
    const [task, setTask] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!task)
            alert("task cannot be empty!");
        else
        props.addTodo(task);
        setTask("");
    }

  return (
    <div className="container mar">
      <form onSubmit={submit}>
        <div className="mb-3">
          <h2>Add a Todo! 😀</h2>
          <input
            type="text"
            value = {task}
            onChange = {(e) => setTask(e.target.value)}
            className="form-control"
            id="task"
            placeholder="Enter a Task"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Todo!
        </button>
      </form>
    </div>
  );
}
