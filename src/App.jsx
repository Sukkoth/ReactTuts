import './App.css';
import useSound from 'use-sound';
import DrumKey from './DrumKey';
import { useState } from 'react';

function App() {
    const [volume, setVolume] = useState(0.1);
    const keys = [
        { key: 'Q', audio: 'src/assets/audio/Chord_1.mp3' },
        {
            key: 'W',
            audio: 'src/assets/audio/Chord_2.mp3',
        },
        {
            key: 'E',
            audio: 'src/assets/audio/Chord_3.mp3',
        },
        {
            key: 'A',
            audio: 'src/assets/audio/Give_us_a_light.mp3',
        },
        {
            key: 'S',
            audio: 'src/assets/audio/Dry_Ohh.mp3',
        },
        { key: 'D', audio: 'src/assets/audio/Bld_H1.mp3' },
        {
            key: 'Z',
            audio: 'src/assets/audio/punchy_kick_1.mp3',
        },
        {
            key: 'X',
            audio: 'src/assets/audio/side_stick_1.mp3',
        },
        {
            key: 'C',
            audio: 'src/assets/audio/Brk_Snr.mp3',
        },
    ];
    return (
        <main className='main' onKeyDown={() => console.log('Pressed')}>
            <section className='drumMachine' id='drumMachine'>
                <div className='drumPanel'>
                    {keys.map((drumKey, index) => (
                        <DrumKey
                            key={index}
                            keyLetter={drumKey.key}
                            audio={drumKey.audio}
                            volume={volume}
                        />
                    ))}
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
                            min={0}
                            max={10}
                            value={volume * 10}
                            onChange={(e) => setVolume(e.target.value / 10)}
                            name='volume'
                            id='volume'
                            className='volume-slider'
                            style={{ slid: 'red' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
