import React from 'react';
import Button from './Button';

const DisplayChecked = ({ displayChecked, uncheckAll }) => {
    return (
        <div className='displayChecked'>
            <h1>Completed</h1>
            <div className='displayCheckedBtns'>
                <Button className='checkedButtons' onClick={() => uncheckAll(id)}  text='Uncheck All' />
                <Button className='checkedButtons' text='Delete All' />
            </div>
            {displayChecked}
        </div>
    );
}

export default DisplayChecked;