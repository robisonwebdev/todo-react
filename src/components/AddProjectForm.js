import React from 'react';

const AddProjectForm = ({ onSubmit, onChange, onCancel, value}) => {
    return (
        <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange} />
                <button type='submit'>Add Item</button>
                <button type='button' onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default AddProjectForm;