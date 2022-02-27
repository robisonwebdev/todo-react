import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../../styles/Main/Checkbox.css';

const Checkbox = ({ className, checked, iconName, id, onChange, onClick, name }) => {
    return (
        <label className={className}>
            <div className='itemLeft'>
                <input type='checkbox' checked={checked} onChange={() => onChange(id, name)} />
                {name}
            </div>
            <div className='itemRight'>
                <DeleteForeverIcon sx={{ fontSize: 20 }} />
            </div>
        </label>
    );
}

export default Checkbox;