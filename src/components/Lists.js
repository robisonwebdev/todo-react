import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import DisplayChecked from './DisplayChecked';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ addItem, deleteChecked, deleteItem, id, items, title, uncheckAll, updateChecked }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showChecked, setShowChecked] = useState(false);

    useEffect(() => {
        handleReset();
    }, [id])

    useEffect(() => {
        handleShowChecked();
    }, [items])

    let displayUnchecked = items.map(item => {
        if (!item.checked) {
            return <Checkbox className='item' deleteItem={deleteItem} key={item.name + id} name={item.name} checked={item.checked} updateChecked={updateChecked} id={id} />
        } else return null;        
    });    

    const handleAddItemBtn = () => {
        setShowBtn(false);
        setShowForm(true);
    }

    const handleChange = (event) => {
        setInputVale(event.target.value);
    }

    const handleReset = () => {
        setShowBtn(true);
        setShowForm(false);
        setInputVale('');
    }

    const handleShowChecked = () => {
        const results = items.filter(item => item.checked === true);

        results.length > 0 ? setShowChecked(true) : setShowChecked(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(id, inputValue);
        handleReset();
    }
    
    return (
        <div id='Lists'>
            <div className='displayUnchecked'>
                <h1>{title}</h1>
                <div className='listItems'>
                    {displayUnchecked}
                </div>            
                {showBtn ? <Button onClick={handleAddItemBtn} className='listButton' text='Add Item' /> : null}
                {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
            </div>
            {showChecked ? <DisplayChecked id={id} items={items} deleteChecked={() => deleteChecked(id)} uncheckAll={() => uncheckAll(id)} updateChecked={updateChecked} /> : null }
        </div>
    );
}

export default Lists;