import React, { useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
          title: 'Fishing',
          items: []
        },
        {
          title: 'Job',
          items: []
        }
    ]);
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: []
        }

        setProjects(prevState => [...prevState, newObject])
    }

    const viewProject = () => {
        console.log('Project Clicked');
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} />
            <Lists />
        </div>
    );
}

export default Main;