import React, { useState } from 'react';
import '../styles/AddProjectForm.css';

const AddProjectForm = ({ onCancel, onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className='projectForm' onSubmit={() => onSubmit(inputValue)}>
                <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Project Name' />
                <div className='projectFormBtns'>
                    <button type='submit'>Add Project</button>
                    <button type='button' onClick={onCancel}>Cancel</button>
                </div>
        </form>
    );
}

export default AddProjectForm;