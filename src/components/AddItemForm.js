import React from 'react';
import '../styles/AddItemForm.css';

const AddItemForm = ({ cancel, handleChange, submit, value }) => {
    return (
        <form className='AddItemForm' onSubmit={submit}>
            <input type='text' onChange={handleChange} value={value} />
            <button type='submit'>Add</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );
}

export default AddItemForm;