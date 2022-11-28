import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.tasks.todolist) // tasks = todos

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} /> // id, content, completed, text props로 내려줌
            ))}
        </ul>
    );
};

export default TodoList;