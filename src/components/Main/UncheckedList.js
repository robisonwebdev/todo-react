import React from 'react';
import Checkbox from './Checkbox';
import '../../styles/Main/UncheckedList.css';

const UncheckedList = ({ deleteListItem, handleCheckbox, project }) => {
    const { items } = project[0];

    const emptyListMessage = () => {
        return <p className='empty_list_message'>No items in list. Click Add Item below to start adding items to list.</p>
    };

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
            {items.length === 0 ? emptyListMessage() : getUncheckedItems()}
        </ul>
    );
};

export default UncheckedList;