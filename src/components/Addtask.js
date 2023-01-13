import React from "react";
import { useState } from "react";
import "./css/TodoInput.css"

const Addtask = ({createTask}) => {
    const [task , setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(task);
        setTask("");
    };
    return(
        <form className="TodoInput" onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Enter a Task"
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
        </form>
    );
};

export default Addtask