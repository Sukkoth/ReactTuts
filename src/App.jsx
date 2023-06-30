import { useEffect, useState } from 'react';
import './App.css';
import './themes.css';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Task added');
    };

    const handleUpdateTask = (newTask) => {
        const newTasks = tasks.map((task) => {
            return task.id === newTask.id ? newTask : task;
        });
        updateTasks(newTasks);
        toast.success('Task updated');
    };

    const handleMarkTaskComplete = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        updateTasks(newTasks);
    };

    const handleDeleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => {
            return task.id != taskId;
        });
        updateTasks(newTasks);
        toast.info('Task Deleted');
    };

    const clearAllTasks = () => {
        updateTasks([]);
        toast.info('Tasks cleared');
    };

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('tasks'));
        setTasks(localData || []);
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
                    handleMarkTaskComplete={handleMarkTaskComplete}
                    setEditing={setEditing}
                />
                <ToastContainer
                    position='top-right'
                    autoClose={2500}
                    closeOnClick
                    theme='light'
                />
            </main>
        </div>
    );
}

export default App;
