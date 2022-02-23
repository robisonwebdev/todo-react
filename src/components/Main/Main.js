import React, { useEffect, useState } from 'react';
import ProjectsContainer from '../ProjectsContainer';
import Lists from '../Lists';
import '../../styles/Main/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
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
        }
    ]);
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [currentID, setCurrentID] = useState(projects[0].id)

    useEffect(() => {
        viewProject(currentID);
    }, [projects, currentID])
    
    const addItem = (id, value) => {
        let updateItems = projects.map(project => {
            if (project.id === id) {
                return {...project, items: [...project.items, {
                    name: value,
                    checked: false
                }]};
            }
            return project;
        })

        setProjects(updateItems);
    }
    
    const addProject = (value) => {
        let newObject = {
            title: value,
            items: [],
            id: Math.floor(Math.random() * 10000)
        }

        if (value === '') {
            return null;
        } else {
            setProjects(prevState => [...prevState, newObject]);
        }
    }

    const deleteChecked = (id) => {
        let newArray = currentProject.items.filter(item => {
            return item.checked !== true;
        })

        updateProjects(id, newArray);
    }

    const deleteItem = (id, name) => {
        let newArray = currentProject.items.filter(item => item.name !== name);

        updateProjects(id, newArray);
    }

    const deleteProject = (id) => {
        const newArray = projects.filter(project => project.id !== id);

        setProjects(newArray);
    }

    const uncheckAll = (id) => {
        let newArray = currentProject.items.map(item => {
            if (item.checked === true) {
                return {...item, checked: false}
            }
            return item;
        })

        updateProjects(id, newArray);
    }

    const updateChecked = (id, name) => {
        let newArray = currentProject.items.map(item => {
            if (item.name === name) {
                return {...item, checked: !item.checked}
            }
            return item;
        })
 
        updateProjects(id, newArray);
    }

    const updateProjects = (id, newArray) => {
        let updateProjects = projects.map(project => {
            if (project.id === id) {
                return {...project, items: newArray};
            }
            return project;
        })

        setProjects(updateProjects);
    }

    const viewProject = (id) => {
        let findProject = projects.filter(project => project.id === id);

        setCurrentProject(findProject[0]);
        setCurrentID(findProject[0].id);
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} deleteProject={deleteProject} viewProject={viewProject} />
            <Lists
                project={currentProject}
                id={currentProject.id}
                items={currentProject.items}
                title={currentProject.title}
                addItem={addItem}
                deleteChecked={deleteChecked}
                deleteItem={deleteItem}
                uncheckAll={uncheckAll}
                updateChecked={updateChecked}
            />
        </div>
    );
}

export default Main;