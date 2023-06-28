import React, { useState } from 'react';
import addTask from './addTask.css';

const AddTask = ({ handleAddTask, tasksLength }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            const taskData = {
                id: tasksLength + 1,
                task: task,
                reminder: new Date(),
                completed: false,
            };
            handleAddTask(taskData);
        }
    };
    return (
        <section className='addTask'>
            <input
                type='text'
                placeholder='add Task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='addButton' onClick={handleSubmit}>
                Add
            </button>
        </section>
    );
};

export default AddTask;
