import React, { useEffect, useState } from 'react';
import AddItemBtn from './AddItemBtn';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ projectList, addItem }) => {
    const [inputValue, setInputVale] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        handleReset();
    }, [projectList])

    const projectItems = projectList[0].items.map(item => {
        return <li key={item}>{item}</li>
    });

    const projectTitle = projectList[0].title;

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
        addItem(projectList[0].id, inputValue);
        handleReset();
    }
    
    return (
        <div id='Lists'>
            <h1>{projectTitle}</h1>
            <ul>
                {projectItems}
            </ul>            
            {showBtn ? <AddItemBtn onClick={handleAddItemBtn} /> : null}
            {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
        </div>
    );
}

export default Lists;