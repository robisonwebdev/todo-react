import React from 'react';

const AddProjectForm = ({ onSubmit, onChange, value}) => {
    return (
        <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange} />
                <button type='submit'>Add Item</button>
                <button type='reset'>Cancel</button>
        </form>
    );
}

export default AddProjectForm;