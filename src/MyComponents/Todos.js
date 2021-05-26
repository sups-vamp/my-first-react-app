import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {

    return (
        <div className="container">
            <h2>Todo's list</h2>
            {
                props.todos.length === 0 ? <h5>No tasks to show! 😐</h5>:

                    props.todos.map((todo) => {
                        return <Todo todo={todo} key={todo.sno} onDeleteAction={props.onDeleteAction} />
                    })

            }
        </div>
    )
}
