import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Finish RTK',
            completed: true,
        },
    ],
};
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: nanoid(), ...action.payload });
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },

        toggleTask: (state, action) => {
            state.tasks = state.tasks.map((task) =>
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
