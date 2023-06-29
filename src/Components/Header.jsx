import './header.css';
import icon from '../assets/icon.png';
import themes from '../themes';
const Header = ({ backgroundTheme, setBackgroundTheme }) => {
    return (
        <nav className='header'>
            <div className='icon'>
                <img className='icon' src={icon} alt='icon' /> <p>Taskmate</p>
            </div>

            <div className='themes'>
                {themes.map((theme) => (
                    <div
                        className={`theme ${
                            theme.name === backgroundTheme ? 'active' : ''
                        } ${theme.name}`}
                        onClick={() => setBackgroundTheme(theme.name)}
                        alt={theme.name}
                        key={theme.id}
                    ></div>
                ))}
            </div>
        </nav>
    );
};

export default Header;
