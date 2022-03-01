import React from 'react';
import '../../styles/Main/ListForm.css';

const ListForm = ({ cancel, handleChange, submit, value }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='list_form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={value} placeholder='Enter Item' />
            <div className='form_controls'>
                <button type='submit'>Add</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ListForm;