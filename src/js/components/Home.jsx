import React, { useState } from "react";
import "../../styles/index.css"; // Importamos los estilos

const Home = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [hoveredTask, setHoveredTask] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && task.trim() !== '') {
            setTaskList([...taskList, { 
                id: Date.now(), 
                text: task 
            }]);
            setTask('');
        }
    };

    const deleteTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add task and press Enter"
                className="task-input"
            />
            
            <div className="task-list">
                {taskList.length === 0 ? (
                    <p className="empty-message">No tasks yet</p>
                ) : (
                    taskList.map((taskItem) => (
                        <div 
                            key={taskItem.id}
                            className="task-item"
                            onMouseEnter={() => setHoveredTask(taskItem.id)}
                            onMouseLeave={() => setHoveredTask(null)}
                        >
                            {taskItem.text}
                            {hoveredTask === taskItem.id && (
                                <button 
                                    onClick={() => deleteTask(taskItem.id)}
                                    className="delete-btn"
                                >
                                    🗑️
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;