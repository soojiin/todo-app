import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { editTask } from '../redux/tasksSlice';

const EditTodo = () => {
    const [value, setValue] = useState('');

    const Edit = (e) => {

    };

    return (
        <div className='edit-todo'>
            <input
                type='text'
                className='edit-input'
                placeholder='Edit task'
                value={value}
                onChange={e => setValue(e.target.value)}
            ></input>
            <button
                className='edit-button'
                onClick={Edit}
            >Save</button>
        </div>
    )
}

export default EditTodo;