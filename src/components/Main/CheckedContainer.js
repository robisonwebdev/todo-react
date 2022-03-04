import React from 'react';
import Button from './Button';
import CheckedList from './CheckedList';
import '../../styles/Main/CheckedContainer.css';

const CheckedContainer = ({ allProjects, project, updateAllProjects }) => {
    const deleteListItem = (deletedItem) => {
        const updatedList = project[0].items.filter(item => item.name !== deletedItem);

        const updateProjects = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: updatedList};
            };

            return obj;
        });

        updateAllProjects(updateProjects);
    };

    const handleCheckbox = (checkedItem) => {
        const updatedList = project[0].items.map(item => {
            if (item.name === checkedItem) {
                return {...item, checked: !item.checked};
            };

            return item;
        });

        const updateProjects = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: updatedList};
            };

            return obj;
        });

        updateAllProjects(updateProjects);
    };

    return (
        <section className='checked_container'>
            <h1>Completed List</h1>
            <div className='checked_list_buttons'>
                <Button className='checked_button' text='Uncheck All' />
                <Button className='checked_button' text='Delete All' />
            </div>
            <CheckedList deleteListItem={deleteListItem} handleCheckbox={handleCheckbox} project={project} />
        </section>
    );
};

export default CheckedContainer;