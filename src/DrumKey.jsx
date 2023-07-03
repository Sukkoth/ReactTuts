import useSound from 'use-sound';

const DrumKey = ({ drumKey, volume, setDisplay, power }) => {
    const [play] = useSound(drumKey.audio, { volume });
    const playDrum = () => {
        if (power) {
            setDisplay(drumKey.display);
            play();
        }
    };
    return (
        <button
            className='drum-pad'
            onClick={playDrum}
            id={drumKey.display.replace(' ', '-')}
        >
            {drumKey.key}
        </button>
    );
};

DrumKey.defaultProps = {
    keyLetter: 'Q',
    power: true,
};

export default DrumKey;
