import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

const DisplayChecked = ({ id, items, uncheckAll, updateChecked }) => {
    let displayChecked = items.map(item => {
        if (item.checked) {
            return <Checkbox className='checkedItem' key={item.name + id} name={item.name} checked={item.checked} updateChecked={updateChecked} id={id} />
        } else return null;
    });

    return (
        <div className='displayChecked'>
            <h1>Completed</h1>
            <div className='displayCheckedBtns'>
                <Button className='checkedButtons' onClick={uncheckAll}  text='Uncheck All' />
                <Button className='checkedButtons' text='Delete All' />
            </div>
            {displayChecked}
        </div>
    );
}

export default DisplayChecked;