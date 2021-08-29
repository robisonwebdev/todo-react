import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ addItem, id, items, title, uncheckAll, updateChecked }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        handleReset();
    }, [id])

    let displayUnchecked = items.map(item => {
        if (!item.checked) {
            return <Checkbox className='item' key={item.name + id} name={item.name} checked={item.checked} updateChecked={updateChecked} id={id} />
        } else return null;        
    });


    let displayChecked = items.map(item => {
        if (item.checked) {
            return <Checkbox className='checkedItem' key={item.name + id} name={item.name} checked={item.checked} updateChecked={updateChecked} id={id} />
        } else return null;
    })

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
            <div className='displayUnchecked'>
                <h1>{title}</h1>
                <div className='listItems'>
                    {displayUnchecked}
                </div>            
                {showBtn ? <Button onClick={handleAddItemBtn} className='listButton' text='Add Item' /> : null}
                {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
            </div>            
            <div className='displayChecked'>
                <h1>Completed</h1>
                <div className='displayCheckedBtns'>
                    <Button className='checkedButtons' onClick={() => uncheckAll(id)}  text='Uncheck All' />
                    <Button className='checkedButtons' text='Delete All' />
                </div>
                {displayChecked}
            </div>
        </div>
    );
}

export default Lists;