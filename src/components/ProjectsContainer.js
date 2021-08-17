import React, { useState } from 'react';
import Project from './Project';
import AddProjectBtn from './AddProjectBtn';
import AddProjectForm from './AddProjectForm';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = ({ projects, addProject, viewProject }) => {
    const [inputValue, setInputValue] = useState('');
    const [addProjectBtn, setAddProjectBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const projectsMap = projects.map(project => <Project key={project.title} text={project.title} onClick={viewProject} />)

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProject(inputValue);
        setInputValue('');
        setShowForm(false);
        setAddProjectBtn(true);
    }

    const handleCancel = () => {
        setInputValue('');
        setShowForm(false);
        setAddProjectBtn(true);
    }

    const handleAddProjectBtn = () => {
        setAddProjectBtn(false);
        setShowForm(true);
    }

    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            {projectsMap}            
            {addProjectBtn ? <AddProjectBtn onClick={handleAddProjectBtn} /> : null}
            {showForm ? <AddProjectForm onSubmit={handleSubmit} onChange={handleChange} onCancel={handleCancel} value={inputValue} /> : null }
        </div>
    );
}

export default ProjectsContainer;