import React from 'react';
import Checkbox from './Checkbox';
import '../../styles/Main/UncheckedList.css';

const UncheckedList = ({ deleteListItem, handleCheckbox, project }) => {
    const { items } = project[0];

    const getUncheckedItems = () => {
        const mapItems = items.map(item => {
            if (item.checked) return null;
    
            return (
                <Checkbox
                    checked={item.checked}
                    className='unchecked_item'
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
        <ul className='unchecked_list'>
            {items.length === 0 ? <p>No items in list.</p> : getUncheckedItems()}
        </ul>
    );
};

export default UncheckedList;