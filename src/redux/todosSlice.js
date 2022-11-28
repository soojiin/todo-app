import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todolist: [],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = { 
                id: uuid(),
                content: action.payload.newContent,
                completed: false,
            }
            state.todolist.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }, // item -> todo
        editTask: (state, action) => {
            // return state.map(item => item.id === action.payload.id ? action.payload : item)
            
            const { id, text } = action.payload;

            return state.map(item => item.id === id ? {...item, text} : item); 
        
        },
        checkTask: (state, action) => {
            const { id, checked } = action.payload;

            return state.map(item => item.id === id ? {...item, completed: checked} : item);

            // return state.map(item => item.id === action.payload.id ? {...item, ...action.payload} : item)
        },
        // filterTask: (state, action) => {
            
        // }
    }
});

export const { addTask, deleteTask, editTask, checkTask } = todosSlice.actions;

export default todosSlice.reducer;

// reducer: tasksSlice.reducer
// action creators: tasksSlice.actions.addTask, tasksSlice.actions.deleteTask
// actionType:
//     tasksSlice.actions.addTask.type: 'todos/addTask'
//     tasksSlice.actions.deleteTask.type: 'todos/deleteTask'
// payload: { id: ~~, content: '~~', completed: false}
