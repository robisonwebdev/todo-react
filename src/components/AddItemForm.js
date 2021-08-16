import React from 'react';

const AddItemForm = ({ cancel }) => {
    return (
        <form>
            <input />
            <button>Add</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );
}

export default AddItemForm;