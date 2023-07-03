import useSound from 'use-sound';

const DrumKey = ({ keyLetter, audio }) => {
    const [play] = useSound(audio);
    const handleKeyboard = (e) =>
        e.key.toLowerCase() === 'q'
            ? console.log('Pressed')
            : console.log('Not pressed');
    return (
        <button
            className='drum-pad'
            onClick={() => play()}
            onKeyDown={handleKeyboard}
        >
            {keyLetter}
        </button>
    );
};

DrumKey.defaultProps = {
    keyLetter: 'Q',
};

export default DrumKey;
