import React from 'react';
import Project from './Project';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = () => {
    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            <Project text='Shopping' />
        </div>
    );
}

export default ProjectsContainer;