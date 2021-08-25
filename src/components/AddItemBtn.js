import React from 'react';

const AddItemBtn = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>Add Item</button>
    );
}

export default AddItemBtn;