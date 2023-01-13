import React from "react";

import Addtask from "./Addtask";
import Task from "./Task";

import { useSelector  } from "react-redux";
import { useDispatch } from "react-redux";

import { CSSTransition , TransitionGroup } from "react-transition-group";

import { completeTask , AddTask, removeTask , updateTodo } from "../redux/action";

import "./css/TodoList.css"

const ListTask = () => {
    const state = useSelector((state) => ({...state.todos}));
    let dispatch = useDispatch();

    const create = (newTask) => {
        dispatch(AddTask(newTask))
    }

    const update = (id , updateTask) =>{
        dispatch(updateTodo(id, updateTask))
    }

    return(
        <div className="TodoList" >
            <h1>Todo App - Redux Checkpoint</h1>
            <Addtask createTask={create} />
            <ul>
                <TransitionGroup className="todo=list" >
                    {state.todos && state.todos.map((todo) => {
                        return(
                            <CSSTransition key={todo.id}  classNames="todo">
                                <Task
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.description}
                                    completed={todo.isDone}
                                    toggleTodo={() => dispatch(completeTask(todo))}
                                    removeTask={() => dispatch(removeTask(todo))}
                                    updateTodo={update}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default ListTask