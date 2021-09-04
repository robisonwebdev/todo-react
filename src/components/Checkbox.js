import React from 'react';

const Checkbox = ({ className, checked, id, onChange, onClick, name }) => {
    return (
        <label className={className}>
            <div className='itemLeft'>
                <input type='checkbox' checked={checked} onChange={() => onChange(id, name)} />
                {name}
            </div>
            <div className='itemRight'>
                <i className="las la-trash" onClick={() => onClick(id, name)}></i>
            </div>
        </label>
    );
}

export default Checkbox;