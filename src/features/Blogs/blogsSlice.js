import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sampleBlogs from './initialState';
import axios from 'axios';

const initialState = {
    isLoading: false,
    errors: null,
    data: [],
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get(
        'https://newsapi.org/v2/everything?q=keyword&apiKey=f59436d2f91b4a8c91ee0e698f392647'
    );
    return response.data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });
    },
});

export default blogsSlice;
