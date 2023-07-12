import React from 'react';
import icon from '../assets/icon3.png';
import './header.css';
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <h3>★彡[ʙʟᴏɢɢʏ]彡★</h3>
                {/* <img src={icon} alt='icon' /> */}
                <div className='nav'>
                    <a href='#'>Home</a>
                    <a href='#'>Login</a>
                    <a href='#'>Register</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#' className='searchIcon'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
