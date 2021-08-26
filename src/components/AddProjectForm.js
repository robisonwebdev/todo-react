import React from 'react';
import '../styles/AddProjectForm.css';

const AddProjectForm = ({ onSubmit, onChange, onCancel, value}) => {
    return (
        <form className='projectForm' onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange} placeholder='Project Name' />
                <div className='projectFormBtns'>
                    <button type='submit'>Add Item</button>
                    <button type='button' onClick={onCancel}>Cancel</button>
                </div>
        </form>
    );
}

export default AddProjectForm;