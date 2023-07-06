import React from 'react';
import Notes from './Notes';
import Header from './Header';

const NoteApp = () => {
    return (
        <div className='container'>
            <Header />
            <Notes />
        </div>
    );
};

export default NoteApp;
