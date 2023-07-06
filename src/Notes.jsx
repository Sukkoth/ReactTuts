import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteNoteAction,
    fetchNotesAction,
} from './redux/actions/notesActions';

const Notes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNotesAction());
    }, []);

    const notes = useSelector((state) => state.notes);

    return (
        <div className='content'>
            <h1>Notes List {notes.length}</h1>
            {notes.map((note) => (
                <div className='note' key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <button onClick={() => dispatch(deleteNoteAction(note.id))}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Notes;
