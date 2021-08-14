import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = ({ projects, addProject}) => {
    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} />
            <Lists />
        </div>
    );
}

export default Main;