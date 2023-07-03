import useSound from 'use-sound';

const DrumKey = ({ drumKey, volume, setDisplay }) => {
    const [play] = useSound(drumKey.audio, { volume });
    const playDrum = () => {
        setDisplay(drumKey.display);
        play();
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
};

export default DrumKey;
