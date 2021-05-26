import React from 'react'
import './Todo.css';

export const Todo = (props) => {
    return (
        <div>
            
            <h4>{props.todo.desc}</h4>
            <button className = "btn btn-danger btm-small" onClick={(() => {props.onDeleteAction(props.todo)})}>Remove task</button>
        
        <hr></hr>
        </div>
    )
}
