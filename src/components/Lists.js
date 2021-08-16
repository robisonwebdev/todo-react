import React, { useState } from 'react';
import AddItemBtn from './AddItemBtn';
import AddItemForm from './AddItemForm';
import '../styles/Lists.css';

const Lists = ({ projectList }) => {
    const [showBtn, setShowBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const projectItems = projectList[0].items.map(item => {
        return <li>{item}</li>
    });

    const handleAddItemBtn = () => {
        setShowBtn(false);
        setShowForm(true);
    }

    const handleCancel = () => {
        setShowBtn(true);
        setShowForm(false);
    }
    
    return (
        <div id='Lists'>
            <h1>{projectList[0].title}</h1>
            <ul>
                {projectItems}
            </ul>
            
            {showBtn ? <AddItemBtn onClick={handleAddItemBtn} /> : null}
            {showForm ? <AddItemForm cancel={handleCancel} /> : null}
        </div>
    );
}

export default Lists;