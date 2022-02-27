import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../../styles/Main/Checkbox.css';

const Checkbox = ({ className, checked, iconName, id, onChange, onClick, name }) => {
    return (
        <li className={className}>
            <div className='item_left'>
                <input type='checkbox' checked={checked} onChange={() => onChange(id, name)} />
                {name}
            </div>
            <div className='item_right'>
                <DeleteForeverIcon sx={{ fontSize: 20 }} />
            </div>
        </li>
    );
}

export default Checkbox;