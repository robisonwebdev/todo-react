import React from 'react';

const Checkbox = ({ name, checked, updateChecked, id }) => {
    return (
        <label className='item'>
            <input type='checkbox' checked={checked} onChange={() => updateChecked(id, name)} />
            {name}
        </label>
    );
}

export default Checkbox;