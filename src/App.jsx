import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className='main'>
            <h1 className='title'>Counter App</h1>
            <h1 className='count'>{count}</h1>
            <div className='buttons'>
                <button className='add' onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button className='sub' onClick={() => setCount(count - 1)}>
                    -
                </button>
            </div>
            <button className='reset' onClick={() => setCount(0)}>
                Reset
            </button>
        </main>
    );
}

export default App;
