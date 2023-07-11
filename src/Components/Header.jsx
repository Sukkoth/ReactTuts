import React from 'react';
import icon from '../assets/icon.png';
import header from './header.css';
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img src={icon} alt='icon' />
                <div className='nav'>
                    <a href='#'>Home</a>
                    <a href='#'>Login</a>
                    <a href='#'>Register</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#' className='searchIcon'>
                        <i class='fa-solid fa-magnifying-glass'></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
