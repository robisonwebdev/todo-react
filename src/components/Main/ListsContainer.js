import React from 'react';
import UncheckedContainer from './UncheckedContainer';
import '../../styles/Main/ListsContainer.css';


const ListsContainer = ({ allProjects, project, updateAllProjects }) => {
    const noProjectMessage = () => {
        return (
            <p>No Project selected. Click on a project to view todo list.</p>
        );
    };

    return (
        <section className='lists_container'>
            {project === null ? noProjectMessage() : null}
            {project === null ? null : <UncheckedContainer allProjects={allProjects} project={project} updateAllProjects={updateAllProjects} />}
            {/* {project === null ? null : <CheckedContainer allProjects={allProjects} project={project} updateAllProjects={updateAllProjects} />} */}
        </section>
    );
}

export default ListsContainer;