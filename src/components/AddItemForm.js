import React from 'react';
import '../styles/AddItemForm.css';

const AddItemForm = ({ cancel, handleChange, submit, value }) => {
    return (
        <form className='AddItemForm' onSubmit={submit}>
            <input type='text' onChange={handleChange} value={value} />
            <div className='formControls'>
                <button type='submit'>Add</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}

export default AddItemForm;