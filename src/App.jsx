import { useEffect, useState } from 'react';
import './App.css';
import './colors.css';
import useApiFetch from './useApiFetch';

function App() {
    const { data: quotes, isLoading, error } = useApiFetch();
    const [showing, setShowing] = useState(100);
    const [color, setColor] = useState(1);

    const handleClick = () => {
        setShowing((s) => (s === quotes.length - 1 ? 0 : s + 1));
        setColor((c) => (c === 6 ? 1 : c + 1));
    };

    useEffect(() => {
        quotes.length > 0 &&
            setShowing(Math.floor(Math.random() * quotes.length));
        setColor(Math.floor(Math.random() * 6));
    }, [quotes]);

    return (
        <div className={`container bg-color${color}`}>
            {!isLoading && quotes.length > 0 && (
                <div id='quote-box'>
                    <h2 id='text' className={`color${color}`}>
                        "{quotes[showing].quote}
                    </h2>

                    <p
                        id='author'
                        style={{ textAlign: 'end' }}
                        className={`color${color}`}
                    >
                        -{quotes[showing]?.author}
                    </p>
                    <div className='buttons'>
                        <div>
                            <a
                                target='_top'
                                title='Tweet this quote!'
                                id='tweet-quote'
                                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=Sukkoth&text="${quotes[showing]?.quote}" \n\t- ${quotes[showing]?.author}`}
                                className={`bg-color${color} twitter-share-button`}
                            >
                                <i className='fa-brands fa-twitter'></i>
                            </a>
                            <a
                                href={`https://t.me/share/?url=http://t.me.sukkoth&text=${quotes[showing]?.quote}`}
                                className={`bg-color${color}`}
                            >
                                <i className='fa-brands fa-telegram'></i>
                            </a>
                        </div>
                        <button
                            className={`bg-color${color}`}
                            onClick={handleClick}
                            id='new-quote'
                        >
                            Next Quote
                        </button>
                    </div>
                </div>
            )}

            {isLoading && <p>Loading . . .</p>}

            <p>Quote generator by Sukkoth</p>
        </div>
    );
}

export default App;
