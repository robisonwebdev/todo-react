import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import AddItemBtn from './AddItemBtn';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ id, items, title, addItem }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        handleReset();
    }, [id])

    let projectItems = items.map(item => {
        return <Checkbox name={item.name} checked={item.checked} />
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
            {/* {console.log(items[0])} */}
            <h1>{title}</h1>
            <ul>
                {projectItems}
            </ul>            
            {showBtn ? <AddItemBtn onClick={handleAddItemBtn} /> : null}
            {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
        </div>
    );
}

export default Lists;