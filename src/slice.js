const { createSlice, configureStore } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'count',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

const { increment, decrement, reset, incrementBy } = counterSlice.actions;

store.dispatch(increment());
store.dispatch(incrementBy(20));
console.log(store.getState());
