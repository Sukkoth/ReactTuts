import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

const initialState = {
    transactions: [],
    transaction: {},
    loading: false,
    error: null,
    isAdded: false,
    isUpdated: false,
};

//create transaction action
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

//update transaction action
export const updateTransactionAction = createAsyncThunk(
    'transaction/update',
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
            const response = await axios.put(
                `${baseURL}/transactions/${id}`,
                {
                    name,
                    account,
                    transactionType,
                    amount,
                    category,
                    notes,
                    id,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

//fetch transaction action
export const getTransactionAction = createAsyncThunk(
    'transaction/details',
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
                `${baseURL}/transactions/${id}`,
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
        //create transaction
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

        //update transaction
        builder.addCase(updateTransactionAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateTransactionAction.fulfilled, (state, action) => {
            state.loading = false;
            state.isUpdated = true;
            state.transaction = action.payload;
        });
        builder.addCase(updateTransactionAction.rejected, (state, action) => {
            state.loading = false;
            state.isUpdated = false;
            state.transaction = null;
            state.error = action.payload;
        });

        //get transaction
        builder.addCase(getTransactionAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTransactionAction.fulfilled, (state, action) => {
            state.loading = false;
            state.transaction = action.payload;
        });
        builder.addCase(getTransactionAction.rejected, (state, action) => {
            state.loading = false;
            state.transaction = null;
            state.error = action.payload;
        });
    },
});

//generate reducer

const transactionsReducer = transactionSlice.reducer;
export default transactionsReducer;
