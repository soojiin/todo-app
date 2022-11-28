import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todosSlice';
// import { Button } from 'bootstrap';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const Add = (e) => {
        e.preventDefault(); 

        // 아무것도 입력하지 않은 경우
        if (!value.trim().length) { // value.trim().length : 양 끝 공백 제거
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

    return (
        <div className='add-todo'>
            <input
                type='text'
                className='add-input'
                placeholder='어떤 일을 하시겠습니까?'
                value={value}
                onChange={e => setValue(e.target.value)}
                // autoFocus
            ></input>
            <button
                className='add-button'
                onClick={Add}
                // color='primary'
            >Add</button>
        </div>
    )
};

export default AddTodo;