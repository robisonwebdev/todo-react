import React, { useEffect, useState } from 'react';
import CheckedContainer from './CheckedContainer';
import UncheckedContainer from './UncheckedContainer';
import '../../styles/Main/ListsContainer.css';


const ListsContainer = ({ allProjects, project, updateAllProjects }) => {
    const [showCheckedContainer, setShowCheckedContainer] = useState(false);

    const noProjectMessage = () => {
        return (
            <p>No Project selected. Click on a project to view todo list.</p>
        );
    };

    // Checks project items for checked = true, sets state based on result
    useEffect(() => {
        if (project !== null) {
            const filterChecked = project[0].items.filter(item => item.checked === true);

            filterChecked.length > 0 ? setShowCheckedContainer(true) : setShowCheckedContainer(false);
        };
    }, [allProjects, project]);

    return (
        <section className='lists_container'>
            {project === null ? noProjectMessage() : null}
            {project === null ? null : <UncheckedContainer allProjects={allProjects} project={project} updateAllProjects={updateAllProjects} />}
            {project === null 
                ? null
                : showCheckedContainer ? <CheckedContainer allProjects={allProjects} project={project} updateAllProjects={updateAllProjects} />
                    : null
            }
        </section>
    );
}

export default ListsContainer;