import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todosSlice"; // todosSlice.reducer 
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    tasks: taskReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['tasks'] // 유지하고 싶은 값
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;