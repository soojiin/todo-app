import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todolist: [],
    },
    reducers: {
        addTask: (state, action) => {
            const { newContent } = action.payload;
            const newTask = { 
                id: uuid(),
                content: newContent,
                completed: false,
            }
            state.todolist.unshift(newTask);
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            state.todolist = state.todolist.filter(item => item.id !== id)
        },
        editTask: (state, action) => {            
            const { id, value } = action.payload;
            state.todolist = state.todolist.map(item => item.id === id ? {...item, content: value} : item); 
        },
        // todo의 completed 상태 변경
        checkTask: (state, action) => {
            const { id, checked } = action.payload;
            state.todolist = state.todolist.map(item => item.id === id ? {...item, completed: checked } : item);
        },
    }
});

export const { addTask, deleteTask, editTask, checkTask } = todosSlice.actions;

export default todosSlice.reducer;