import './App.css';
import NoteApp from './NoteApp';
import { useDispatch } from 'react-redux';
import { fetchNotesAction } from './redux/actions/notesActions';

function App() {
    return <NoteApp />;
}

export default App;
