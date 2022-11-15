import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask} from "../redux/tasksSlice";
import styled from 'styled-components';

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 10px;
`;

const Input = styled.div`
    ${({check}) => {
        return check ? `text-decoration: line-through` : null;
    }}
`;

const TodoItem = ({ id, content }) => {
    const [isChecked, setIsChecked]  = useState(false);
    // const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const Delete = (e) => {
        dispatch(deleteTask({id: id}))
    };

    // const Edit = (e) => {
    //     dispatch(editTask({}))
    //     setIsEditing(false);
    // };

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Li className="todo-item" key={id}>
            <input type='checkbox' onChange={handleCheck} />
            <Input check={isChecked}>{content}</Input>
            <button 
                className="edit-button"
                // onClick={Edit}
            >Edit</button>
            <button 
                className="delete-button"
                onClick={Delete}
            >Delete</button>
        </Li>
    );
};

export default TodoItem;