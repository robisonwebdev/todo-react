import React, { useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
          title: 'Fishing',
        },
        {
          title: 'Job',
        }
    ]);
    
    const addProject = (value) => {
        let newObject = {
            title: value,
        }

        setProjects(prevState => [...prevState, newObject])
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} />
            <Lists />
        </div>
    );
}

export default Main;