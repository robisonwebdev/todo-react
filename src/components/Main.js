import React, { useEffect, useState } from 'react';
import ProjectsContainer from './ProjectsContainer';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    const [projects, setProjects] = useState([
        {
          title: 'Fishing',
          items: [
              {
                  name: 'Bait',
                  checked: false
              },
              {
                  name: 'Line',
                  checked: false
              }
          ],
          id: 147
        },
        {
          title: 'Job',
          items: [
              {
                  name: 'Hours',
                  checked: false
              },
              {
                  name: 'Pay',
                  checked: false
              },
              {
                  name: 'Years',
                  checked: false
              }
          ],
          id: 159
        }
    ]);

    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [currentID, setCurrentID] = useState(projects[0].id)

    useEffect(() => {
        viewProject(currentID);
        console.log(projects)
    }, [projects, currentID])
    
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
                return {...project, items: [...project.items, {
                    name: value,
                    checked: false
                }]};
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

    const updateChecked = (id, name) => {
       let updateItem = currentProject.items.map(item => {
           if (item.name === name) {
               return {...item, checked: !item.checked}
           }
           return item;
       })

       let updateProjects = projects.map(project => {
           if (project.id === id) {
               return {...project, items: updateItem}
           }
           return project;
       })

       setProjects(updateProjects);
    }

    return (
        <div id='Main'>
            <ProjectsContainer projects={projects} addProject={addProject} deleteProject={deleteProject} viewProject={viewProject} />
            <Lists project={currentProject} id={currentProject.id} items={currentProject.items} title={currentProject.title} addItem={addItem} updateChecked={updateChecked} />
        </div>
    );
}

export default Main;