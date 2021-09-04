import React from 'react';

const Checkbox = ({ className, checked, onClick, id, name, updateChecked  }) => {
    return (
        <label className={className}>
            <div className='itemLeft'>
                <input type='checkbox' checked={checked} onChange={() => updateChecked(id, name)} />
                {name}
            </div>
            <div className='itemRight'>
                <i className="las la-trash" onClick={() => onClick(id, name)}></i>
            </div>
        </label>
    );
}

export default Checkbox;