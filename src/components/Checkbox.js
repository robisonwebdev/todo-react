import React from 'react';

const Checkbox = ({ className, checked, id, name, updateChecked  }) => {
    return (
        <label className={className}>
            <div className='itemLeft'>
                <input type='checkbox' checked={checked} onChange={() => updateChecked(id, name)} />
                {name}
            </div>
            <div className='itemRight'>
                <i className="las la-trash"></i>
            </div>
        </label>
    );
}

export default Checkbox;