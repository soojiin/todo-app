import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteTask, editTask, checkTask } from "../../redux/todosSlice";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { del } from '../../api/delete';
import { taskUpdate, checkboxUpdate } from '../../api/update';

const Li = styled.li`
    display: flex;
    gap: 15px;
    padding: 12px 20px;

    &:hover {

    }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
    cursor: pointer;
`;

const EditInput = styled.input`
    flex-grow: 1;
    padding: 0.5em;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    background-color: aliceblue;
`;

const LabelText = styled.label`
    cursor: pointer;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => {
        return props.completed ? 
        `color: gray;
        text-decoration: line-through;
        `
        : 
        null;
    }}

`;

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-left: auto;
`;

const TodoItem = ({ id, content, completed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);

    // const dispatch = useDispatch();

    const handleDeleteClick = () => {
        // dispatch(deleteTask({id: id}));
        del(id);
    };

    const handleEdit = () => {
        // console.log(value)
        if (!value.trim().length) { 
            // dispatch(editTask({ id, value }));
            taskUpdate({
                id: id,
                content: value,
            })
            return; 
        }
        if (value === content) {
            setIsEditing(false);
            return;
        }
        setIsEditing(false)
        // dispatch(editTask({ id, value })); 
        taskUpdate({
            id: id,
            content: value,
        })
    }

    const handleEnter = (e) => {
        if (!(e.keyCode === 13 || e.key === 'Enter')) {
            return;
        }
        handleEdit();
    }

    return (
        <Li className={completed ? 'completed' : 'active'}>
            <CheckboxInput
                // type='checkbox' 
                className="toggle"
                // onChange={e => dispatch(
                //     checkTask({
                //         id,
                //         checked: e.target.checked
                //     })
                // )}
                onChange={e => checkboxUpdate({
                    id: id,
                    completed: e.target.checked
                })}
                checked={completed} 
            />
            {isEditing ?
            <EditInput 
                className="edit-todo"
                value={value}
                placeholder='내용 없음'
                onInput={e => setValue(e.target.value)}
                onKeyDown={handleEnter}
                onBlur={handleEdit}
                autoFocus
            />
            :
            <LabelText
                completed={completed}
                onDoubleClick={() => setIsEditing(true)}
            >{ content }</LabelText>  
            }
            <Button 
                className="delete-button"
                onClick={handleDeleteClick}
            ><FontAwesomeIcon icon={faDeleteLeft} size='lg' /></Button>
        </Li>
    );
};

export default TodoItem;