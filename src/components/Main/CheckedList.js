import React from 'react';
import Checkbox from './Checkbox';
import '../../styles/Main/CheckedList.css';

const CheckedList = ({ deleteListItem, handleCheckbox, project }) => {
    const { items } = project[0];

    const getCheckedItems = () => {
        const mapItems = items.map(item => {
            if (!item.checked) return null;
    
            return (
                <Checkbox
                    checked={item.checked}
                    className='checked_item'
                    deleteListItem={deleteListItem}
                    handleCheckbox={handleCheckbox}
                    key={item.name + item.id}
                    name={item.name}
                />
            );
        });

        return mapItems;
    };

    return (
        <ul className='checked_list'>
            {getCheckedItems()}
        </ul>
    );
};

export default CheckedList;