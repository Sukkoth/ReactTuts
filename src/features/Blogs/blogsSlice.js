import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../app/API/axios';
import parseURL from '../../utils/parseURL';

const initialState = {
    isLoading: false,
    errors: null,
    data: [],
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
    async (_, { getState }) => {
        const response = await axios.get(
            `/top-headlines${parseURL(getState().blogs.queryOptions)}`
        );
        return response.data;
    }
);

export const fetchSearch = createAsyncThunk(
    'blogs/searchBlogs',
    async (_, { getState }) => {
        console.log(`/everything${parseURL(getState().blogs.queryOptions)}`);
        const response = await axios.get(
            `/everything${parseURL(getState().blogs.queryOptions)}`
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
            state.queryOptions.page = action.payload || 1;
        },

        updateQueryOptions(state, action) {
            state.queryOptions = action.payload;
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
        });

        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });

        //search

        builder.addCase(fetchSearch.pending, (state, action) => {
            state.isLoading = true;
            state.errors = null;
        });

        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.errors = null;
        });

        builder.addCase(fetchSearch.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });
    },
});

export const { updateSearchKey, changePage, updateQueryOptions } =
    blogsSlice.actions;

export default blogsSlice;
