
import React, { useState } from 'react';
import "../../styles/index.css";

const Home = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task }]);
            setTask('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
    };

    const toggleComplete = (id) => {
        if (completedTasks.includes(id)) {
            setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
        } else {
            setCompletedTasks([...completedTasks, id]);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow custom-card">
                        <div className="card-body p-4">
                            <h1 className="text-center mb-4 custom-title">Mis Tareas</h1>

                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg custom-input"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="¿Qué necesitas hacer?"
                                />
                                <button
                                    className="btn custom-btn-add"
                                    onClick={() => {
                                        if (task.trim()) {
                                            setTasks([...tasks, { id: Date.now(), text: task }]);
                                            setTask('');
                                        }
                                    }}
                                >
                                    +
                                </button>
                            </div>

                            <div className="task-list">
                                {tasks.length === 0 ? (
                                    <div className="text-center text-muted py-4 empty-tasks">
                                        <p className="mb-1">No hay tareas pendientes</p>
                                        <small>Añade una nueva tarea para comenzar</small>
                                    </div>
                                ) : (
                                    tasks.map(task => (
                                        <div
                                            key={task.id}
                                            className={`task-item d-flex justify-content-between align-items-center p-3 mb-2 rounded ${completedTasks.includes(task.id) ? 'task-completed' : 'task-pending'
                                                }`}
                                        >
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className={`task-checkbox me-3 ${completedTasks.includes(task.id) ? 'checked' : ''}`}
                                                    onClick={() => toggleComplete(task.id)}
                                                >
                                                    {completedTasks.includes(task.id) && <span>✓</span>}
                                                </div>
                                                <span className={completedTasks.includes(task.id) ? 'text-decoration-line-through' : ''}>
                                                    {task.text}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="btn btn-sm btn-delete"
                                                aria-label="Eliminar tarea"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            {tasks.length > 0 && (
                                <div className="mt-3 text-end small text-muted">
                                    {completedTasks.length} de {tasks.length} completadas
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;