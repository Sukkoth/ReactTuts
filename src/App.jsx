import { useState, useRef, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTask,
    removeTask,
    tasksSelector,
    toggleTask,
} from './features/Tasks/tasksSlice';
import { fetchPosts } from './features/Posts/postsSlice';

function App() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const tasksData = useSelector((state) => state.tasks);
    const postsData = useSelector((state) => state.posts);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: task,
            completed: false,
        };
        dispatch(addTask(newTask));
        setTask('');
        inputRef.current.focus();
    };

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className='container'>
            <header>
                <h1>React Redux toolkit</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type='text'
                        name='title'
                        placeholder='Add task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button>Add</button>
                </form>

                <div className='content'>
                    <h3>Tasks {tasksData.tasks.length}</h3>
                    <ul>
                        {tasksData.tasks &&
                            tasksData.tasks?.map((task) => (
                                <li
                                    onClick={() =>
                                        dispatch(toggleTask(task.id))
                                    }
                                    key={task.id}
                                    style={
                                        task.completed
                                            ? completedStyle
                                            : { color: 'black' }
                                    }
                                >
                                    {task.title}{' '}
                                    <button
                                        onClick={() =>
                                            dispatch(removeTask(task.id))
                                        }
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </header>
            <h2>Posts: {postsData.posts.length}</h2>
            {postsData.errors?.message && <h4>{postsData.errors?.message}</h4>}
            {postsData.isLoading && <h4>Loading posts......</h4>}
            <ul>
                {postsData?.posts.map((post) => (
                    <li key={post?.id}>{post?.title}</li>
                ))}
            </ul>
        </div>
    );
}

const completedStyle = {
    color: 'red',
    textDecoration: 'line-through',
};
export default App;
