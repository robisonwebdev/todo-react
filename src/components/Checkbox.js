import React from 'react';

const Checkbox = ({ name, checked, updateChecked, id }) => {
    return (
        <label>
            <input type='checkbox' checked={checked} onChange={() => updateChecked(id)} />
            {name}
        </label>
    );
}

export default Checkbox;