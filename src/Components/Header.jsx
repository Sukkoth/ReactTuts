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
                    <img
                        className={`theme ${
                            theme.name === backgroundTheme ? 'active' : ''
                        }`}
                        onClick={() => setBackgroundTheme(theme.name)}
                        src={theme.path}
                        alt={theme.name}
                        key={theme.id}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Header;
