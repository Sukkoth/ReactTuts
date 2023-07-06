const { createAction } = require('@reduxjs/toolkit');
const { nanoid } = require('@reduxjs/toolkit');

const initialState = {
    count: 0,
};

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const reset = createAction('RESET');
const incrementBy = createAction('INCREMENT_BY');
const createNotes = createAction('CREATE_NOTE', (userId, title, content) => {
    return {
        payload: {
            id: nanoid(),
            userId,
            title,
            content,
        },
    };
});
console.log(
    createNotes(
        1,
        'Hello World',
        'This is what you say when you just start messing around with some serious explosives'
    )
);
