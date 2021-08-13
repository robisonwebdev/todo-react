import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    return (
        <div id='Main'>
            <ProjectsContainer />
            <Lists />
        </div>
    );
}

export default Main;