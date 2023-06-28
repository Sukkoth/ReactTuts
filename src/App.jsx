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
                <AddTask />
                <Tasks />
            </main>
        </div>
    );
}

export default App;
