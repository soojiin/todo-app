import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        editTask: (state, action) => {

        }
    }
});

export const {addTask, deleteTask, editTask} = tasksSlice.actions;

export default tasksSlice.reducer;

// reducer: tasksSlice.reducer
// action creators: tasksSlice.actions.addTask, tasksSlice.actions.deleteTask
// actionType:
//     tasksSlice.actions.addTask.type: 'tasksSlice/addTask'
//     tasksSlice.actions.deleteTask.type: 'tasksSlice/deleteTask'