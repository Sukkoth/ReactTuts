import './App.css';
function App() {
    return (
        <main className='main'>
            <section className='drumMachine' id='drumMachine'>
                <div className='drumPanel'>
                    <button className='drum-pad'>Q</button>
                    <button className='drum-pad'>W</button>
                    <button className='drum-pad'>E</button>
                    <button className='drum-pad'>A</button>
                    <button className='drum-pad'>S</button>
                    <button className='drum-pad'>D</button>
                    <button className='drum-pad'>Z</button>
                    <button className='drum-pad'>X</button>
                    <button className='drum-pad'>C</button>
                </div>

                <div className='controls'></div>
            </section>
        </main>
    );
}

export default App;
