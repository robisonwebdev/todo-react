import React, { useEffect, useState } from 'react';
import Button from './Button';
import ListForm from './ListForm';
import UncheckedList from './UncheckedList';
import '../../styles/Main/UncheckedContainer.css';

const UncheckedContainer = ({ allProjects, project, updateAllProjects }) => {
    const [showButton, setShowButton] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const addListItem = (item) => {
        const newItem = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: [...obj.items, {
                    name: item,
                    checked: false
                }]};
            };

            return obj;
        });

        updateAllProjects(newItem);
    };

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

    const handleButtonClick = () => {
        setShowButton(false);
        setShowForm(true);
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

    const handleFormReset = () => {
        setShowButton(true);
        setShowForm(false);
    };

    // Resets showButton and showForm when changing projects.
    useEffect(() => {
        handleFormReset();
    }, [project]);

    return (
        <section className='unchecked_container'>
            <UncheckedList deleteListItem={deleteListItem} handleCheckbox={handleCheckbox} project={project} />
            {showButton ? <Button className='add_item_button' onClick={handleButtonClick} text='Add Item' /> : null}
            {showForm ? <ListForm addListItem={addListItem} onCancel={handleFormReset} /> : null}
        </section>
    );
};

export default UncheckedContainer;