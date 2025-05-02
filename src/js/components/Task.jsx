import React, { useState } from "react";

const Task = ({ task, onDelete }) => {
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div 
            className="task-item p-3 mb-2 bg-light d-flex justify-content-between align-items-center"
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <span>{task.text}</span>
            {showDelete && (
                <button 
                    onClick={() => onDelete(task.id)}
                    className="btn btn-sm btn-danger"
                >
                    Delete
                </button>
            )}
        </div>
    );
};

export default Task;