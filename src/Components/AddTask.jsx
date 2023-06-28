import React, { useState } from 'react';
import addTask from './addTask.css';

const AddTask = () => {
    const [task, setTask] = useState('');
    return (
        <section className='addTask'>
            <input
                type='text'
                placeholder='add Task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='addButton'>Add</button>
        </section>
    );
};

export default AddTask;
