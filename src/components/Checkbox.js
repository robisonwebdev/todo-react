import React from 'react';

const Checkbox = ({ className, checked, id, name, updateChecked  }) => {
    return (
        <label className={className}>
            <input type='checkbox' checked={checked} onChange={() => updateChecked(id, name)} />
            {name}
        </label>
    );
}

export default Checkbox;