import NotesAction from './notesActionTypes';
export const addNoteAction = (note) => {
    return {
        type: NotesAction.ADD_NOTE,
        payload: note,
    };
};

export const deleteNoteAction = (noteId) => {
    return {
        type: NotesAction.DELETE_NOTE,
        payload: noteId,
    };
};

export const fetchNotesAction = () => {
    return {
        type: NotesAction.FETCH_NOTES,
    };
};
