import './App.css';
import DrumKey from './DrumKey';
import { useEffect, useState } from 'react';
import DrumPresets from './DrumPresets';
import Switch from './Switch';

function App() {
    const [volume, setVolume] = useState(0.1);
    const [display, setDisplay] = useState('Shaker');
    const [power, setPower] = useState(true);
    const [banker, setBanker] = useState(0);

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
                            {display}
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
