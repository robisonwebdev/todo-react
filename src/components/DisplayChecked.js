import React from 'react';

const DisplayChecked = () => {
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