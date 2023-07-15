import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../../../utils/baseURL';
import axios from 'axios';

const initialState = {
    account: {},
    accounts: [],
    error: null,
    loading: false,
    success: false,
    isUpdated: false,
};

//create account action

export const createAccountAction = createAsyncThunk(
    'account/create',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        const { name, initialBalance, accountType, notes } = payload;
        try {
            //get token
            const token = getState()?.users?.userAuth?.userInfo?.token;
            //pass token to header
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            //make request
            const response = await axios.post(
                `${baseURL}/accounts`,
                {
                    name,
                    initialBalance,
                    accountType,
                    notes,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

//update account
export const updateAccountAction = createAsyncThunk(
    'account/update',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        const { id, name, initialBalance, accountType, notes } = payload;
        try {
            //get token
            const token = getState()?.users?.userAuth?.userInfo?.token;
            //pass token to header
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            //make request
            const response = await axios.put(
                `${baseURL}/accounts/${id}`,
                {
                    name,
                    initialBalance,
                    accountType,
                    notes,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

//get single account

export const getSingleAccountAction = createAsyncThunk(
    'account/get-details',
    async (id, { rejectWithValue, getState, dispatch }) => {
        try {
            //get token
            const token = getState()?.users?.userAuth?.userInfo?.token;
            //pass token to header
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            //make request
            const response = await axios.get(
                `${baseURL}/accounts/${id}`,
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

//slice
const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    extraReducers: (builder) => {
        //create account
        builder.addCase(createAccountAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createAccountAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.account = action.payload;
        });
        builder.addCase(createAccountAction.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.account = null;
            state.error = action.payload;
        });

        //get account detail
        builder.addCase(getSingleAccountAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSingleAccountAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.account = action.payload;
        });
        builder.addCase(getSingleAccountAction.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.account = null;
            state.error = action.payload;
        });

        //update account
        builder.addCase(updateAccountAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateAccountAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.isUpdated = true;
            state.account = action.payload;
        });
        builder.addCase(updateAccountAction.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.account = null;
            state.error = action.payload;
            state.isUpdated = true;
        });
    },
});

//generate reducer
const accountsReducer = accountsSlice.reducer;
export default accountsReducer;
