import React, { useEffect, useState } from 'react';
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

    // useEffect(() => {
    //     viewProject(currentID);
    // }, [projects, currentID])
    
    // const addItem = (id, value) => {
    //     let updateItems = projects.map(project => {
    //         if (project.id === id) {
    //             return {...project, items: [...project.items, {
    //                 name: value,
    //                 checked: false
    //             }]};
    //         }
    //         return project;
    //     })

    //     setProjects(updateItems);
    // }

    // const deleteChecked = (id) => {
    //     let newArray = currentProject.items.filter(item => {
    //         return item.checked !== true;
    //     })

    //     updateProjects(id, newArray);
    // }

    // const deleteItem = (id, name) => {
    //     let newArray = currentProject.items.filter(item => item.name !== name);

    //     updateProjects(id, newArray);
    // }

    // const uncheckAll = (id) => {
    //     let newArray = currentProject.items.map(item => {
    //         if (item.checked === true) {
    //             return {...item, checked: false}
    //         }
    //         return item;
    //     })

    //     updateProjects(id, newArray);
    // }

    // const updateChecked = (id, name) => {
    //     let newArray = currentProject.items.map(item => {
    //         if (item.name === name) {
    //             return {...item, checked: !item.checked}
    //         }
    //         return item;
    //     })
 
    //     updateProjects(id, newArray);
    // }

    // const updateProjects = (id, newArray) => {
    //     let updateProjects = projects.map(project => {
    //         if (project.id === id) {
    //             return {...project, items: newArray};
    //         }
    //         return project;
    //     })

    //     setProjects(updateProjects);
    // }

    return (
        <main>
            <ProjectsContainer projects={projects} setProjects={setProjects} setSelectedProject={setSelectedProject} />
            <ListsContainer allProjects={projects} project={displayProject()} updateAllProjects={setProjects} />
        </main>
    );
}

export default Main;