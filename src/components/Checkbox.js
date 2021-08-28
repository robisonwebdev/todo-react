import React from 'react';

const Checkbox = ({ checked, id, name, updateChecked,  }) => {
    return (
        <label className='item'>
            <input type='checkbox' checked={checked} onChange={() => updateChecked(id, name)} />
            {name}
        </label>
    );
}

export default Checkbox;