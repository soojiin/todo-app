import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styled from 'styled-components';

const H1 = styled.h1`
    color:white;
    margin-top: 2rem;
`;

const Todo = () => {
    return (
        <>
            <H1 className="title">Todos</H1>
            <AddTodo />
            <TodoList />
        </>
    );
}

export default Todo;