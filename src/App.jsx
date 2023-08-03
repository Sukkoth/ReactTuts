import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchBlogs } from './features/Blogs/blogsSlice';
import { clearAllListeners } from '@reduxjs/toolkit';
import Blogs from './features/Blogs/Blogs';
import Header from './Components/Header';

function App() {
    const [search, setSearch] = useState('');
    return (
        <div className='main'>
            <Header search={search} setSearch={setSearch} />
            <Blogs search={search} />
        </div>
    );
}

export default App;
