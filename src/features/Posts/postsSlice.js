import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    isLoading: false,
    errors: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(
        'http://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        //hanlde lifecycle
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });
    },
});

export default postsSlice;
