import React from 'react';

const AddItemForm = ({ cancel, handleChange, value }) => {
    return (
        <form>
            <input type='text' onChange={handleChange} value={value} />
            <button>Add</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );
}

export default AddItemForm;