import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ addItem, id, items, title, updateChecked }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        handleReset();
    }, [id])

    let projectItems = items.map(item => {
        return <Checkbox key={item.name + id} name={item.name} checked={item.checked} updateChecked={updateChecked} id={id} />
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

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(id, inputValue);
        handleReset();
    }
    
    return (
        <div id='Lists'>
            <h1>{title}</h1>
            <div className='listItems'>
                {projectItems}
            </div>            
            {showBtn ? <Button onClick={handleAddItemBtn} className='listButton' text='Add Item' /> : null}
            {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
        </div>
    );
}

export default Lists;