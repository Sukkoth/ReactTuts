import NotesAction from '../actions/notesActionTypes';
const initialState = {
    notes: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NotesAction.ADD_NOTE:
            const notes = [...state.notes, action.payload];
            localStorage.setItem('notes', JSON.stringify(notes));
            return {
                notes,
            };
        case NotesAction.FETCH_NOTES:
            const localNotes = JSON.parse(localStorage.getItem('notes'));
            return {
                notes: localNotes || [],
            };
        case NotesAction.DELETE_NOTE:
            const filteredNotes = state.notes.filter(
                (note) => note.id != action.payload
            );
            localStorage.setItem('notes', JSON.stringify(filteredNotes));
            return {
                notes: filteredNotes
            };
        default:
            return state;
    }
};

export default notesReducer;
