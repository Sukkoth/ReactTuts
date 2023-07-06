import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAction } from './redux/actions/notesActions';

const Header = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            return;
        }
        const note = {
            id: Math.floor(Math.random() * 1000),
            title,
            content,
        };
        dispatch(addNoteAction(note));
        setTitle('');
        setContent('');
    };

    return (
        <div className='header'>
            <h1>Notes Taking App Built with React Redux</h1>
            <p>This is a simple notes taking app built with redux</p>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Add Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default Header;
