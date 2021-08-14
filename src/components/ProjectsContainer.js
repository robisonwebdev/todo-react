import React, { useState } from 'react';
import Project from './Project';
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
    }

    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            {projectsMap}
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
}

export default ProjectsContainer;