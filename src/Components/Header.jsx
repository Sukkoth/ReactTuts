import React, { useEffect, useState } from 'react';
import icon from '../assets/icon3.png';
import './header.css';
import { useDispatch } from 'react-redux';
import { updateSearchKey, fetchSearch } from '../features/Blogs/blogsSlice';
const Header = ({ search, setSearch }) => {
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(updateSearchKey(search));
        dispatch(fetchSearch());
    };
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
                </div>
                {true && (
                    <>
                        <input
                            type='text'
                            className='searchBar'
                            id='searchBar'
                            placeholder='Search . . .'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <a
                            href='#'
                            className='searchIcon'
                            onClick={handleSearch}
                        >
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </a>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
