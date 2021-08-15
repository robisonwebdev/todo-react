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

    const [list, setList] = useState([]);
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: []
        }

        setProjects(prevState => [...prevState, newObject])
    }

    const viewProject = (text) => {
        let findProject = projects.filter(project => project.title === text);

        setList(findProject);
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} viewProject={viewProject} />
            <Lists projectList={list} />
        </div>
    );
}

export default Main;