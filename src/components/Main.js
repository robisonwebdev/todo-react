import React, { useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
          title: 'Fishing',
          items: ['Bait', 'Line'],
          id: 147
        },
        {
          title: 'Job',
          items: ['Hours', 'Pay', 'Years'],
          id: 159
        }
    ]);

    const [list, setList] = useState(projects);
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: [],
            id: Math.floor(Math.random() * 10000)
        }

        setProjects(prevState => [...prevState, newObject])
    }

    const viewProject = (text) => {
        let findProject = projects.filter(project => project.title === text);

        setList(findProject);
    }

    return (
        <div id='Main'>
            {console.log(projects)}
            <ProjectsContainer projects={projects} addProject={addProject} viewProject={viewProject} />
            <Lists projectList={list} />
        </div>
    );
}

export default Main;