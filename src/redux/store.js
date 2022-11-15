import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice"; // tasksSlice.reducer 

export default configureStore({
    reducer: {
        tasks: taskReducer,
    }
})