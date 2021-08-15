import React, { useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
          title: 'Fishing',
          items: ['Bait', 'Line']
        },
        {
          title: 'Job',
          items: ['Hours', 'Pay', 'Years']
        }
    ]);
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: []
        }

        setProjects(prevState => [...prevState, newObject])
    }

    const viewProject = (text) => {
        console.log(`Project ${text} Clicked`);
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} viewProject={viewProject} />
            <Lists />
        </div>
    );
}

export default Main;