import React, { useEffect, useState, useRef } from 'react';
import './addTask.css';

const AddTask = ({ handleAddTask, editTask, setEditing, handleUpdateTask }) => {
    const [task, setTask] = useState('');
    const inputRef = useRef(null);

    const clearEditingState = () => {
        setEditing({});
        setTask('');
        inputRef.current.focus();
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        console.log('EDIT TASK', editTask);
        if (editTask?.id) {
            inputRef.current.focus();
            setTask(editTask?.task);
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTask?.id) {
            if (task) {
                const taskData = { ...editTask, task };
                handleUpdateTask(taskData);
                setTask('');
                setEditing({});
            } else {
                inputRef.current.focus();
            }
        } else {
            if (task) {
                const taskData = {
                    task: task,
                    reminder: new Date().toISOString(),
                    completed: false,
                };
                handleAddTask(taskData);
                setTask('');
            } else {
                inputRef.current.focus();
            }
        }
    };
    return (
        <section className='addTask'>
            <input
                ref={inputRef}
                type='text'
                placeholder='add Task'
                value={task}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='addButton' onClick={handleSubmit}>
                {editTask?.id ? 'Update' : 'Add'}
            </button>
            {editTask?.id && (
                <button className='clearEditing' onClick={clearEditingState}>
                    Add new
                </button>
            )}
        </section>
    );
};

export default AddTask;
