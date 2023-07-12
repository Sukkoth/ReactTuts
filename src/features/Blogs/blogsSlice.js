import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../app/API/axios';
import parseURL from '../../utils/parseURL';

const initialState = {
    isLoading: false,
    errors: null,
    data: [],
    options: {
        totalPages: 0,
        currentPage: 0,
        lastPage: 0,
    },
};

export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async (options = 'default') => {
        const response = await axios.get(`/top-headlines?${parseURL(options)}`);
        return response.data;
    }
);

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
