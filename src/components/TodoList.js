import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.tasks) // tasks = todos

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem id={todo.id} content={todo.name} /> // completed={todo.status}
            ))}
        </ul>
    );
};

export default TodoList;