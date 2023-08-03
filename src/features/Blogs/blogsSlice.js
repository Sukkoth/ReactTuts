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
    queryOptions: {
        pageSize: 10,
        page: 1,
        sources: ['bbc-news', 'cnn', 'abc-news', 'al-jazeera-english'],
        q: null,
        category: '',
        language: 'en',
    },
};

export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async (options = 'default', { getState }) => {
        const response = await axios.get(
            `/top-headlines${parseURL(getState().blogs.queryOptions)}`
        );
        return response.data;
    }
);

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        updateSearchKey(state, action) {
            state.queryOptions.q = action.payload;
            state.queryOptions.sources = null;
            state.queryOptions.category = null;
            state.queryOptions.language = 'en';
        },
        changePage(state, action) {
            state.queryOptions.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.isLoading = true;
            state.errors = null;
        });

        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.errors = null;
            // console.log(action.payload.totalResults);
            // state.queryOptions.totalResults = action.payload?.totalResults;
        });

        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });
    },
});

export const { updateSearchKey, changePage } = blogsSlice.actions;

export default blogsSlice;
