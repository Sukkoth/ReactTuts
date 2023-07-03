import useSound from 'use-sound';

const DrumKey = ({ drumKey, volume, setDisplay }) => {
    const [play] = useSound(drumKey.audio, { volume });
    const handleKeyboard = (e) =>
        e.key.toLowerCase() === 'q'
            ? console.log('Pressed')
            : console.log('Not pressed');
    return (
        <button
            className='drum-pad'
            onClick={() => {
                setDisplay(drumKey.display);
                play();
            }}
            onKeyDown={handleKeyboard}
        >
            {drumKey.key}
        </button>
    );
};

DrumKey.defaultProps = {
    keyLetter: 'Q',
};

export default DrumKey;
