import React from 'react';
import Projects from './Projects';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = () => {
    return (
        <div id='ProjectsContainer'>
            <i class="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            <Projects />
        </div>
    );
}

export default ProjectsContainer;