import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../features/Blogs/blogsSlice';

const store = configureStore({
    reducer: {
        blogs: blogsSlice.reducer,
    },
});

export default store;
