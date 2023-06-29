import React, { useEffect, useState } from 'react';
import './tasks.css';
import Task from './Task';

const Tasks = ({ tasks, handleDeleteTask, setEditing, clearAllTasks }) => {
    return (
        <>
            <div className='tasksHeader'>
                <p>
                    Todo <span className='tasksCount'> {tasks.length}</span>
                </p>
                <button className='clear' onClick={clearAllTasks}>
                    Clear all
                </button>
            </div>

            <div className='divider'>
                <hr className='line' />
            </div>

            <div className='tasks'>
                {tasks.length ? (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            setEditing={setEditing}
                        />
                    ))
                ) : (
                    <p className='noTasks'>No tasks</p>
                )}
            </div>
        </>
    );
};

export default Tasks;
