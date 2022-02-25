import React, { useState } from 'react';
import Button from './Button';
import Project from './Project';
import ProjectForm from './ProjectForm';
import '../../styles/Main/ProjectsContainer.css';

const ProjectsContainer = ({ projects, setProjects }) => {
    const [showAddProjectBtn, setShowAddProjectBtn] = useState(true);
    const [showProjectForm, setShowProjectForm] = useState(false);

    const addProject = (value) => {
        const newObject = {
            title: value,
            items: [],
            id: Math.floor(Math.random() * 10000)
        };

        if (value === '') return null;

        setProjects(prevState => [...prevState, newObject]);
    };

    const deleteProject = (id) => {
        const newArray = projects.filter(project => project.id !== id);

        setProjects(newArray);
    };

    const displayProjects = () => {
        const mapProjects = projects.map(project => {
            return (
                <Project
                    deleteProject={deleteProject}
                    key={project.id}
                    projectID={project.id}
                    text={project.title}
                />
            );
        });

        return mapProjects;
    };

    const handleFormReset = () => {
        setShowAddProjectBtn(true);
        setShowProjectForm(false);
    };

    const getNewProject = (value) => {
        addProject(value);
        handleFormReset();
    };

    const handleShowingForm = () => {
        setShowAddProjectBtn(false);
        setShowProjectForm(true);
    };

    return (
        <section className='projects_container'>
            <h2>Projects</h2>
            {projects.length === 0 ? <p>No Projects</p> : displayProjects()}
            {showAddProjectBtn ? <Button className='add_project_btn' onClick={handleShowingForm} text='Add Project' /> : null}
            {showProjectForm ? <ProjectForm onCancel={handleFormReset} newProject={getNewProject} /> : null}
        </section>
    );
}

export default ProjectsContainer;