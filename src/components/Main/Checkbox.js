import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../../styles/Main/Checkbox.css';

const Checkbox = ({ checked, className, deleteListItem, handleCheckbox, name }) => {
    return (
        <li className={className}>
            <div className='item_left'>
                <input type='checkbox' checked={checked} onChange={() => handleCheckbox(name)} />
                {name}
            </div>
            <div className='item_right' onClick={() => deleteListItem(name)}>
                <DeleteForeverIcon sx={{ fontSize: 20 }} />
            </div>
        </li>
    );
}

export default Checkbox;