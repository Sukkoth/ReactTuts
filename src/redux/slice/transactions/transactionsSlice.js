import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

const initialState = {
    transactions: [],
    transaction: {},
    loading: false,
    error: {},
    isAdded: false,
    isUpdated: false,
};

//create action
export const createTransactionAction = createAsyncThunk(
    'transaction/create',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        const { id, name, account, transactionType, amount, category, notes } =
            payload;
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
                `${baseURL}/transactions`,
                {
                    name,
                    account,
                    transactionType,
                    amount,
                    category,
                    notes,
                    account: id,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

const transactionSlice = createSlice({
    name: 'accounts',
    initialState,
    extraReducers: (builder) => {
        //create account
        builder.addCase(createTransactionAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createTransactionAction.fulfilled, (state, action) => {
            state.loading = false;
            state.isAdded = true;
            state.transaction = action.payload;
        });
        builder.addCase(createTransactionAction.rejected, (state, action) => {
            state.loading = false;
            state.isAdded = false;
            state.transaction = null;
            state.error = action.payload;
        });
    },
});

//generate reducer

const transactionsReducer = transactionSlice.reducer;
export default transactionsReducer;
