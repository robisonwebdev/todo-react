import React from 'react';

const Checkbox = ({ name, checked }) => {
    return (
        <label>
            <input type='checkbox' checked={checked} />
            {name}
        </label>
    );
}

export default Checkbox;