import { useEffect, useState } from 'react';
import './App.css';
import './themes.css';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'theme1';
};

function App() {
    const [backgroundTheme, setBackgroundTheme] = useState(setInitialTheme);
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        //TODO continue from, here
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
                    tasksLength={tasks.length}
                />
                <Tasks tasks={tasks} />
            </main>
        </div>
    );
}

export default App;
