import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

const initialState = {
    loading: false,
    error: null,
    users: {},
    user: [],
    profile: {},
    userAuth: {
        loading: false,
        error: null,
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
};

//create actions

//register
export const registerUserAction = createAsyncThunk(
    '/user/regitser',
    async (
        { fullname, email, password },
        { rejectWithValue, getState, dispatch }
    ) => {
        try {
            //headers
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                `${baseURL}/users/register`,
                {
                    fullname,
                    email,
                    password,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

//login
export const loginUserAction = createAsyncThunk(
    'user/login',
    async ({ password, email }, { rejectWithValue, getState, dispatch }) => {
        try {
            const config = {
                header: {
                    'Content-Type': 'application-json',
                },
            };

            const response = await axios.post(
                `${baseURL}/users/login`,
                {
                    password,
                    email,
                },
                config
            );

            localStorage.setItem('userInfo', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

//logout
export const logoutUserAction = createAsyncThunk('user/logout', async () => {
    //remove user from storage
    localStorage.removeItem('userInfo');
    return null;
});

//get profile
export const getProfileAction = createAsyncThunk(
    'user/getProfile',
    async (payload, { rejectWithValue, getState, dispatch }) => {
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
                `${baseURL}/users/profile`,
                config
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

//users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        // REGISTRATION CASES
        builder.addCase(registerUserAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            state.userAuth.userInfo = action.payload;
            state.loading = false;
        });

        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.loading = false;
            state.userAuth.error = action.payload;
        });

        //LOGGING CASES
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userAuth.userInfo = action.payload;
            state.loading = false;
        });

        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.loading = false;
            state.userAuth.error = action.payload;
        });

        //LOGOUT
        builder.addCase(logoutUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.userAuth.userInfo = null;
        });

        //get profile
        builder.addCase(getProfileAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(getProfileAction.fulfilled, (state, action) => {
            state.profile = action.payload;
            state.loading = false;
        });

        builder.addCase(getProfileAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.profile = {};
        });
    },
});

//generate reducer
const usersReducer = usersSlice.reducer;
export default usersReducer;
