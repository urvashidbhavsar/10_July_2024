import { configureStore } from "@reduxjs/toolkit";
import { todoslice } from "../Feature/todoslice";
// import crudop from "";

export const store = configureStore({
    reducer: {
        todos: todoslice.reducer,
        // abc: crudop.reducer,
    },
})