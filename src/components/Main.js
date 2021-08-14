import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = ({ projects, setProjects}) => {
    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} setProjects={setProjects} />
            <Lists />
        </div>
    );
}

export default Main;