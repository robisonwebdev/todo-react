import React, { useState } from 'react';
import '../../styles/Main/ProjectForm.css';

const ProjectForm = ({ onCancel, newProject }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        newProject(inputValue);
        setInputValue('');
    };

    return (
        <form className='project_form' onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Project Name' />
                <div className='project_form_btns'>
                    <button type='submit'>Add Project</button>
                    <button type='button' onClick={onCancel}>Cancel</button>
                </div>
        </form>
    );
}

export default ProjectForm;