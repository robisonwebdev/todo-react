import React from 'react';
import Checkbox from './Checkbox';
import '../../styles/Main/UncheckedList.css';

const UncheckedList = ({ project }) => {
    const { items, title } = project[0];

    const getItems = () => {
        const mapItems = items.map(item => {
            if (item.checked) return null;
    
            return (
                <Checkbox
                    checked={item.checked}
                    className='unchecked_item'
                    // id={id}
                    key={item.name + item.id}
                    name={item.name}
                    // onChange={updateChecked}
                    // onClick={deleteItem}
                />
            );
        });

        return (
            <ul className='unchecked_list'>
                {mapItems}
            </ul>
        );
    };

    return (
        <>
            <h1>{title}</h1>
            {items.length === 0 ? <p>No items in list.</p> : getItems()}
        </>
    );
};

export default UncheckedList;