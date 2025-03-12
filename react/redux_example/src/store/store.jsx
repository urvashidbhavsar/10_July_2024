import { configureStore } from "@reduxjs/toolkit";
import { todoslice } from "../Feature/todoslice";

export const store = configureStore({
    reducer: {
        todos: todoslice
    },
})