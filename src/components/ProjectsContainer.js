import React, { useState } from 'react';
import Project from './Project';
import AddProjectBtn from './AddProjectBtn';
import AddProjectForm from './AddProjectForm';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = ({ projects, addProject }) => {
    const [inputValue, setInputValue] = useState('');
    const [showForm, setShowForm] = useState(false);
    const projectsMap = projects.map(project => <Project text={project.title} />)

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProject(inputValue);
        setInputValue('');
        setShowForm(false);
    }

    const handleCancel = () => {
        setShowForm(false);
    }

    const handleAddProjectBtn = () => {
        setShowForm(true);
    }

    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            {projectsMap}
            <AddProjectBtn onClick={handleAddProjectBtn} />
            
            {showForm ? <AddProjectForm onSubmit={handleSubmit} onChange={handleChange} onCancel={handleCancel} value={inputValue} /> : null }
        </div>
    );
}

export default ProjectsContainer;