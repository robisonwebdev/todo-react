import React, { useState } from 'react';
import '../../styles/Main/ListForm.css';

const ListForm = ({ addListItem, onCancel, handleChange, submit, value }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addListItem(inputValue);
        setInputValue('');
    }

    return (
        <form className='list_form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleInputChange} value={inputValue} placeholder='Enter Item' />
            <div className='form_controls'>
                <button type='submit'>Add</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ListForm;