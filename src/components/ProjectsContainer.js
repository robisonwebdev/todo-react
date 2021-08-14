import React from 'react';
import Project from './Project';
import '../styles/ProjectsContainer.css';

const ProjectsContainer = ({ projects, setProjects }) => {
    const projectsMap = projects.map(project => <Project text={project.title} />)

    return (
        <div id='ProjectsContainer'>
            <i className="las la-inbox">All Projects</i>
            <h2>Projects</h2>
            {projectsMap}
        </div>
    );
}

export default ProjectsContainer;