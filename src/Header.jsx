import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1>Notes Taking App Built with React Redux</h1>
            <p>This is a simple notes taking app built with redux</p>
            <form className='form'>
                <input type='text' placeholder='Add Title' />
                <input type='text' placeholder='Add Content' />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default Header;
