import './App.css';
import React from 'react';
import DrumKey from './DrumKey';
import { useCallback, useEffect, useState } from 'react';
import DrumPresets from './DrumPresets';
import Switch from './Switch';
import useSound from 'use-sound';

const useKeyboardBindings = (map) => {
    React.useEffect(() => {
        const handlePress = (ev) => {
            const handler = map[ev.key];

            if (typeof handler === 'function') {
                handler();
            }
        };

        window.addEventListener('keydown', handlePress);

        return () => {
            window.removeEventListener('keydown', handlePress);
        };
    }, [map]);
};

function App() {
    const [volume, setVolume] = useState(0.1);
    const [display, setDisplay] = useState('Shaker');
    const [power, setPower] = useState(true);
    const [banker, setBanker] = useState(0);
    const [play] = useSound('/src/assets/audio/DrumPad.mp3', {
        sprite: {
            Chord_1: [410, 1500],
            Chord_2: [1880, 1000],
            Chord_3: [2000, 1000],
            Shaker: [0, 200],
            Open_HH: [0, 200],
            Closed_HH: [0, 200],
            Punchy_Kick: [0, 200],
            Side_Stick: [0, 200],
            Snare: [200, 225],
        },
    });

    useKeyboardBindings({
        Q: () => play({ id: 'Chord_1' }),
        W: () => play({ id: 'Chord_2' }),
        E: () => play({ id: 'Chord_3' }),
        A: () => play({ id: 'Chord_1' }),
        S: () => play({ id: 'Chord_1' }),
        D: () => play({ id: 'Closed_HH' }),
        Z: () => play({ id: 'Chord_1' }),
        X: () => play({ id: 'Chord_1' }),
        C: () => play({ id: 'Snare' }),
    });

    return (
        <main className='main'>
            <section className='drumMachine' id='drumMachine'>
                <div className='drumPanel'>
                    {DrumPresets[banker].map((drumKey, index) => (
                        <DrumKey
                            key={index}
                            drumKey={drumKey}
                            volume={volume}
                            setDisplay={setDisplay}
                            power={power}
                        />
                    ))}
                </div>

                <div className='controls-container'>
                    <img src='src/assets/drums.png' alt='icon' />
                    <div className='controls'>
                        <Switch
                            title={'Power'}
                            eventHandler={(e) => setPower((p) => !p)}
                            switchOn={power}
                        />
                        <p className='display' id='display'>
                            {power && display}
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
                        <Switch
                            title={'Bank'}
                            eventHandler={() =>
                                setBanker((b) => (b === 1 ? 0 : 1))
                            }
                            switchOn={banker}
                        />
                    </div>
                </div>
            </section>
            <p>
                Drums By <a href='https://t.me?sukkoth'>Sukkoth</a>
            </p>
        </main>
    );
}

export default App;
