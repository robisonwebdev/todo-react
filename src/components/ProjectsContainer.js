import React, { useState } from 'react';
import Project from './Project';
import AddProjectBtn from './AddProjectBtn';
import AddProjectForm from './AddProjectForm';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = ({ projects, addProject }) => {
    const [inputValue, setInputValue] = useState('');
    const projectsMap = projects.map(project => <Project text={project.title} />)

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProject(inputValue);
        setInputValue('');
    }

    const handleAddProjectBtn = () => {
        console.log("CLICK CLICK");
    }

    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            {projectsMap}
            <AddProjectBtn onClick={handleAddProjectBtn} />
            <AddProjectForm onSubmit={handleSubmit} onChange={handleChange} value={inputValue} />
        </div>
    );
}

export default ProjectsContainer;