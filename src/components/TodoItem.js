import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, checkTask } from "../redux/todosSlice";
import styled from 'styled-components';

const TaskLi = styled.li`
    display: flex;
    justify-content: space-between;
    /* list-style: none; */
    padding: 10px;
`;

const TodoItem = ({ id, content, completed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);

    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTask({id: id}));
    };

    const handleEdit = () => {
        // console.log(value)
        if (!value.trim().length) { 
            dispatch(editTask({ id, value }));
            return; 
        }
        if (value === content) {
            setIsEditing(false);
            return;
        }
        setIsEditing(false)
        dispatch(editTask({ id, value })); 
    }

    const handleEnter = (e) => {
        if (!(e.keyCode === 13 || e.key === 'Enter')) {
            return;
        }
        handleEdit();
    }

    return (
        <TaskLi className={completed ? 'completed' : 'active'}>
            <input 
                type='checkbox' 
                className="toggle"
                onChange={e => dispatch(
                    checkTask({
                        id,
                        checked: e.target.checked
                    })
                )}
                checked={completed} 
            />
            {isEditing ?
            <input 
                className="edit-todo"
                value={value}
                placeholder='내용 없음'
                onInput={e => setValue(e.target.value)}
                onKeyDown={handleEnter}
                onBlur={handleEdit}
                autoFocus
            />
            :
            <label
                onDoubleClick={() => setIsEditing(true)}
            >{ content }</label>  
            }
            <button 
                className="delete-button"
                onClick={handleDeleteClick}
            >Delete</button>
        </TaskLi>
    );
};

export default TodoItem;