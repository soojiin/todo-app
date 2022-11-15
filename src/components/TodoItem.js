import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import styled from 'styled-components';
// import { List } from "reactstrap";

const List = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 10px;
`

const TodoItem = ({ id, content }) => {
    const dispatch = useDispatch();

    const Delete = (e) => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    };
    
    return (
        <List className="todo-item" key={id}>
            <input type='checkbox' />
            <div>{content}</div>
            <button 
                className="edit-button"
            >Edit</button>
            <button 
                className="delete-button"
                onClick={Delete}
            >Delete</button>
        </List>
    );
};

export default TodoItem;