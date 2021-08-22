import React, { useEffect, useState } from 'react';
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

    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [currentID, setCurrentID] = useState(projects[0].id)

    useEffect(() => {
        viewProject(currentID);
    }, [projects])
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: [],
            id: Math.floor(Math.random() * 10000)
        }

        setProjects(prevState => [...prevState, newObject])
    }

    const addItem = (id, value) => {
        let updateItems = projects.map(project => {
            if (project.id === id) {
                return {...project, items: [...project.items, value]};
            }
            return project;
        })

        setProjects(updateItems);
    }

    const deleteProject = (id) => {
        const newArray = projects.filter(project => project.id !== id);

        setProjects(newArray);
    }


    const viewProject = (id) => {
        let findProject = projects.filter(project => project.id === id);

        setCurrentProject(findProject[0]);
        setCurrentID(findProject[0].id);
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} deleteProject={deleteProject} viewProject={viewProject} />
            <Lists id={currentProject.id} items={currentProject.items} title={currentProject.title} addItem={addItem} />
        </div>
    );
}

export default Main;