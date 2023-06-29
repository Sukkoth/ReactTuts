import React from 'react';
import './task.css';

const Task = ({ task, handleDeleteTask, setEditing }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : 'pending'}`}>
            <div className='details'>
                <p className='taskName'>{task.task}</p>
                <p className='reminder'>{task.reminder}</p>
            </div>
            <div className='actions'>
                <p className='edit' onClick={() => setEditing(task)}>
                    <i className='fa-regular fa-pen-to-square'></i>
                </p>
                <p className='delete' onClick={() => handleDeleteTask(task.id)}>
                    <i className='fa-solid fa-trash-can'></i>
                </p>
            </div>
        </div>
    );
};

export default Task;
