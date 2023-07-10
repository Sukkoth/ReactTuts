import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/Tasks/tasksSlice';
import postsSlice from '../features/Posts/postsSlice';

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        posts: postsSlice.reducer,
    },
});

export default store;
