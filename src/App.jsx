import './App.css';
import useSound from 'use-sound';
import DrumKey from './DrumKey';

function App() {
    const [play] = useSound();
    const keys = [
        { key: 'Q', audio: 'src/assets/audio/Chord_1.mp3' },
        {
            key: 'W',
            audio: 'src/assets/audio/.mp3',
        },
        {
            key: 'E',
            audio: 'src/assets/audio/.mp3',
        },
        {
            key: 'A',
            audio: 'src/assets/audio/.mp3',
        },
        {
            key: 'S',
            audio: 'src/assets/audio/.mp3',
        },
        { key: 'D' },
        {
            key: 'Z',
            audio: 'src/assets/audio/.mp3',
        },
        {
            key: 'X',
            audio: 'src/assets/audio/.mp3',
        },
        {
            key: 'C',
            audio: 'src/assets/audio/.mp3',
        },
    ];
    return (
        <main className='main' onKeyDown={() => console.log('Pressed')}>
            <section className='drumMachine' id='drumMachine'>
                <div className='drumPanel'>
                    <DrumKey keyLetter={keys[0].key} audio={keys[0].audio} />
                    <button className='drum-pad'>W</button>
                    <button className='drum-pad'>E</button>
                    <button className='drum-pad'>A</button>
                    <button className='drum-pad'>S</button>
                    <button className='drum-pad'>D</button>
                    <button className='drum-pad'>Z</button>
                    <button className='drum-pad'>X</button>
                    <button className='drum-pad'>C</button>
                </div>

                <div className='controls-container'>
                    <img src='src/assets/drums.png' alt='icon' />
                    <div className='controls'>
                        <div className='switch'>
                            <div className='switch-button'></div>
                        </div>
                        <p className='display' id='display'>
                            Smooth Piano Kit
                        </p>
                        <input
                            type='range'
                            name='volume'
                            id='volume'
                            className='volume-slider'
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
