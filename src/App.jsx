import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchBlogs } from './features/Blogs/blogsSlice';
import { clearAllListeners } from '@reduxjs/toolkit';
import Blogs from './features/Blogs/Blogs';
import Header from './Components/Header';

function App() {
    return (
        <div className='main'>
            <Header />
        </div>
    );
}

export default App;
