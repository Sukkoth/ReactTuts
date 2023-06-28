import React, { useEffect, useState } from 'react';
import tasks from './tasks.css';
import Task from './Task';
import sampleData from '../sampleData';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('tasks'));
        if (!localData)
            localStorage.setItem('tasks', JSON.stringify(sampleData));
        setTasks(localData || sampleData);
    }, []);
    return (
        <>
            <div className='tasksHeader'>
                <p>
                    Todo <span className='tasksCount'> {tasks.length}</span>
                </p>
                <button className='clear'>Clear all</button>
            </div>

            <div className='divider'>
                <hr className='line' />
            </div>

            <div className='tasks'>
                {tasks
                    ? tasks.map((task) => <Task key={task.id} task={task} />)
                    : 'No tasks'}
            </div>
        </>
    );
};

export default Tasks;
