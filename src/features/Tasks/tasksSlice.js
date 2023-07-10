import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'Finish RTK',
        completed: true,
    },
];
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({ id: nanoid(), ...action.payload });
        },

        removeTask: (state, action) => {
            state = state.filter((task) => task.id !== action.payload);
        },

        toggleTask: (state, action) => {
            state = state.map((task) =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        },
    },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export const tasksSelector = (state) => state?.tasks;

export default tasksSlice;
