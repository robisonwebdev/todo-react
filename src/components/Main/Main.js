import React, { useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import ListsContainer from './ListsContainer';
import '../../styles/Main/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([{
        title: 'Shopping List',
        items: [
            {
                name: 'Milk',
                checked: false
            },
            {
                name: 'Bread',
                checked: false
            },
            {
            name: 'Eggs',
            checked: false
            },
            {
            name: 'Butter',
            checked: true
            },
            {
            name: 'Potatos',
            checked: false
            }
        ],
        id: 147
    }]);
    const [selectedProject, setSelectedProject] = useState(null);

    const displayProject = () => {
        if (selectedProject === null) return null;

        const findProject = projects.filter(project => project.id === selectedProject);

        return findProject;
    };

    return (
        <main>
            <ProjectsContainer projects={projects} selectedProject={selectedProject} setProjects={setProjects} setSelectedProject={setSelectedProject} />
            <ListsContainer allProjects={projects} project={displayProject()} updateAllProjects={setProjects} />
        </main>
    );
}

export default Main;