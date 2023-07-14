import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../../../utils/baseURL';
import axios from 'axios';

const initialState = {
    account: null,
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

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    extraReducers: (builder) => {
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
    },
});

//generate reducer
const accountsReducer = accountsSlice.reducer;
export default accountsReducer;
