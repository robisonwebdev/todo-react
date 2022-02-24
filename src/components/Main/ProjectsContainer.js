import React, { useState } from 'react';
import Project from '../Project';
import Button from '../Button';
import AddProjectForm from '../AddProjectForm';
import '../../styles/Main/ProjectsContainer.css';

const ProjectsContainer = ({ addProject, deleteProject, projects, viewProject }) => {
    const [inputValue, setInputValue] = useState('');
    const [addProjectBtn, setAddProjectBtn] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const projectsMap = projects.map(project => <Project key={project.title} text={project.title} projectID={project.id} viewProject={viewProject} deleteProject={deleteProject} />)

    const handleAddProjectBtn = () => {
        setAddProjectBtn(false);
        setShowForm(true);
    }

    const handleCancel = () => {
        setInputValue('');
        setShowForm(false);
        setAddProjectBtn(true);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProject(inputValue);
        setInputValue('');
        setShowForm(false);
        setAddProjectBtn(true);
    }

    return (
        <section className='projects_container'>
            <h2>Projects</h2>
            {projectsMap}
            {addProjectBtn ? <Button className='addProjectBtn' onClick={handleAddProjectBtn} text='Add Project' /> : null}
            {showForm ? <AddProjectForm onSubmit={handleSubmit} onChange={handleChange} onCancel={handleCancel} value={inputValue} /> : null }
        </section>
    );
}

export default ProjectsContainer;