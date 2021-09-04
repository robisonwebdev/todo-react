import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

const DisplayChecked = ({ id, items, uncheckAll, deleteChecked, updateChecked }) => {
    let displayChecked = items.map(item => {
        if (item.checked) {
            return <Checkbox
                checked={item.checked}
                className='checkedItem'
                id={id}
                key={item.name + id}
                name={item.name}
                onChange={updateChecked}
            />
        } else return null;
    });

    return (
        <div className='displayChecked'>
            <h1>Completed</h1>
            <div className='displayCheckedBtns'>
                <Button className='checkedButtons' onClick={uncheckAll}  text='Uncheck All' />
                <Button className='checkedButtons' onClick={deleteChecked} text='Delete All' />
            </div>
            {displayChecked}
        </div>
    );
}

export default DisplayChecked;