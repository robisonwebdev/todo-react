import React, { useState } from 'react';
import AddItemBtn from './AddItemBtn';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ projectList }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const projectItems = projectList[0].items.map(item => {
        return <li key={item}>{item}</li>
    });

    const handleAddItemBtn = () => {
        setShowBtn(false);
        setShowForm(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        handleCancel();
    }

    const handleCancel = () => {
        setShowBtn(true);
        setShowForm(false);
        setInputVale('');
    }

    const handleChange = (event) => {
        setInputVale(event.target.value);
    }
    
    return (
        <div id='Lists'>
            <h1>{projectList[0].title}</h1>
            <ul>
                {projectItems}
            </ul>
            
            {showBtn ? <AddItemBtn onClick={handleAddItemBtn} /> : null}
            {showForm ? <AddItemForm submit={handleSubmit} cancel={handleCancel} handleChange={handleChange} value={inputValue} /> : null}
        </div>
    );
}

export default Lists;