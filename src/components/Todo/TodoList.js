import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Ul = styled.ul`
    width: 600px;
    background-color: aliceblue;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 0px;
`;

const H4 = styled.h4`
    color: white;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
`;

const activeTodosSelector = state => state.tasks.todolist.filter(todo => !todo.completed);
const completedTodosSelector = state => state.tasks.todolist.filter(todo => todo.completed);

const TodoList = () => {
    const todos = useSelector(activeTodosSelector);
    const completedTodos = useSelector(completedTodosSelector)
    
    return (
        <div>
            <Ul className='todo-list'>
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} /> // id, content, completed를 props로 내려줌
                ))}
            </Ul>
            <H4>완료</H4>
            <Ul className='completed-list'>
                {completedTodos.map(completedTodo => (
                    <TodoItem key={completedTodo.id} {...completedTodo} />
                ))}
            </Ul>
        </div>
        
    );
};

export default TodoList;