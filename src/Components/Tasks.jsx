import React, { useEffect, useState } from 'react';
import './tasks.css';
import Task from './Task';

const Tasks = ({ tasks, handleDeleteTask, setEditing }) => {
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
                    ? tasks.map((task) => (
                          <Task
                              key={task.id}
                              task={task}
                              handleDeleteTask={handleDeleteTask}
                              setEditing={setEditing}
                          />
                      ))
                    : 'No tasks'}
            </div>
        </>
    );
};

export default Tasks;
