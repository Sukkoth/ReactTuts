import React from 'react';
import task from './task.css';

const Task = ({ task }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : 'pending'}`}>
            <div className='details'>
                <p className='taskName'>{task.task}</p>
                <p className='reminder'>{task.reminder}</p>
            </div>
            <div className='actions'>
                <p className='edit'>
                    <i className='fa-regular fa-pen-to-square'></i>
                </p>
                <p className='delete'>
                    <i className='fa-solid fa-trash-can'></i>
                </p>
            </div>
        </div>
    );
};

export default Task;
