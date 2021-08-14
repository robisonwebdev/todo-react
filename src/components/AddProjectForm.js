import React from 'react';

const AddProjectForm = ({ onSubmit, onChange, value}) => {
    return (
        <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button type='submit'>Add Item</button>
                <button type='reset'>Cancel</button>
        </form>
    );
}

export default AddProjectForm;