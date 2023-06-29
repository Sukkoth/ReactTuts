import { useEffect, useState } from 'react';
import './App.css';
import './themes.css';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import sampleData from './sampleData';

const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'theme1';
};

function App() {
    const [backgroundTheme, setBackgroundTheme] = useState(setInitialTheme);
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState({});

    const updateTasks = (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    const handleAddTask = (task) => {
        const newTasks = [
            ...tasks,
            { ...task, id: tasks[tasks.length - 1]?.id + 1 || 1 },
        ];
        updateTasks(newTasks);
    };

    const handleUpdateTask = (newTask) => {
        console.log('NEW TASK', newTask);
        const newTasks = tasks.map((task) => {
            return task.id === newTask.id ? newTask : task;
        });
        updateTasks(newTasks);
    };

    const handleDeleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => {
            return task.id != taskId;
        });
        updateTasks(newTasks);
    };

    const clearAllTasks = () => {
        updateTasks([]);
    };

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('tasks'));
        if (!localData)
            localStorage.setItem('tasks', JSON.stringify(sampleData));
        setTasks(localData || sampleData);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', backgroundTheme || 'theme1');
    }, [backgroundTheme]);

    return (
        <div className={`container ${backgroundTheme}`}>
            <main className='main'>
                <Header
                    backgroundTheme={backgroundTheme}
                    setBackgroundTheme={setBackgroundTheme}
                />
                <AddTask
                    handleAddTask={handleAddTask}
                    handleUpdateTask={handleUpdateTask}
                    editTask={editing}
                    setEditing={setEditing}
                />
                <Tasks
                    clearAllTasks={clearAllTasks}
                    tasks={tasks}
                    handleDeleteTask={handleDeleteTask}
                    setEditing={setEditing}
                />
            </main>
        </div>
    );
}

export default App;
