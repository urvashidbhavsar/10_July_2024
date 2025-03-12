import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Learn Redux" }]
}

export const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: () => {

        },
        updateTodo: () => {

        }
    }
})
export const { addTodo } = todoslice.actions;

export default todoslice.reducer;