import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-3">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add your task"
                className="form-control me-2"
            />
            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
};

export default TaskForm;