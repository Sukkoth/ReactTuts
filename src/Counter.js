const {
    createAction,
    createReducer,
    configureStore,
} = require('@reduxjs/toolkit');

const initialState = {
    count: 0,
};

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const reset = createAction('RESET');
const incrementBy = createAction('INCREMENT_BY', (amount) => {
    return {
        payload: {
            amount,
        },
    };
});
console.log(incrementBy);

// create reducer
//1. Builder callback notation
//2. Map object notation
const counterSlice = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state) => {
        state.count += 1;
    });
    builder.addCase(decrement, (state) => {
        state.count -= 1;
    });
    builder.addCase(reset, (state) => {
        state.count = 0;
    });
    builder.addCase(incrementBy, (state, action) => {
        state.count += action.payload.amount;
    });
});

const store = configureStore({
    reducer: counterSlice,
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementBy(90));
store.dispatch(decrement());

console.log(store.getState().count);

//createAction, const reset = createAction('RESET')
//createReducer, const counterSlice = createReducer(initialState, (builder) => builder.addCase(actionName, (state) => {state.count+=1}))
//configureStore const store = configureStore({reducer: counterSlice})
