import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/todosSlice';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    padding: 10px;
    /* margin: 0.5em; */
    border: none;
    border-radius: 3px;
    /* width: 80vw; */
    width: 500px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px;
    border: 2px solid white;
    border-radius: 3px;
    width: 50px;
    font-size: 16px;
    color: white;
    background-color: inherit;

    &:hover {
        background-color: rgba(117, 199, 224, 0.562);
    } 
`;

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleAddClick = () => {
        // e.preventDefault(); 

        // 아무것도 입력하지 않은 경우
        if (!value.trim().length) { // .trim() : 양 끝 공백 제거
            alert('Enter a task');
            setValue('');
            return;
        }

        dispatch(
            addTask({
                newContent: value // action.payload
            })
        );

        setValue('');
    };

    const handleKeyDown = (e) => {
        if (!(e.keyCode === 13 || e.key === 'Enter')) {
            return;
        }
        handleAddClick();
    }

    return (
        <Div className='add-todo'>
            <Input
                type='text'
                className='new-todo'
                placeholder='어떤 일을 하시겠습니까?'
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                // autoFocus
            ></Input>
            <Button
                className='add-button'
                onClick={handleAddClick}
            ><FontAwesomeIcon icon={faPlus} /></Button>
        </Div>
    )
};

export default AddTodo;