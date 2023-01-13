import React from "react";
import { useState } from "react";

import { TransitionGroup , CSSTransition  } from "react-transition-group";

import './css/Todo.css'

const Task = ({toggleTodo , task , completed , id , removeTask , updateTodo}) => {
    const [isUpdated , setIsUpdated] = useState(false);
    const [editTask , setEditTask] = useState(task);
    const [todo , setTask] = useState(task)

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id , editTask);
        setIsUpdated(false);
        setTask(editTask)
    }

    return (
        <TransitionGroup className={completed ? "Todo completed" : "Todo" }>
            {isUpdated ? (
                <CSSTransition key="updating" timeout={500} classNames="form">
                    <form className="Todo-edit-form" onSubmit={handleUpdate} >
                        <input
                        type="text"
                        name="task"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        />
                        <button>Save</button>
                    </form>
                </CSSTransition>
            ) : (
                <CSSTransition key="normal" timeout={500} classNames="task-text">
                    <li className="Todo-task" onClick={toggleTodo}>
                        {todo}
                    </li>
                </CSSTransition>
            )}
            
            <div className="Todo-buttons" >
                <button onClick={() => setIsUpdated(true) }>
                    <i className="fas fa-pen" />
                </button>
                <button onClick={removeTask}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </TransitionGroup>
    )
}

export default Task