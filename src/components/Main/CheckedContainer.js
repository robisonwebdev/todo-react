import React from 'react';
import Button from './Button';
import CheckedList from './CheckedList';
import '../../styles/Main/CheckedContainer.css';

const CheckedContainer = ({ allProjects, project, updatedAllProjects }) => {
    return (
        <section className='checked_container'>
            <h1>Completed List</h1>
            <div className='checked_list_buttons'>
                <Button className='checked_button' text='Uncheck All' />
                <Button className='checked_button' text='Delete All' />
            </div>
            <CheckedList project={project} />
        </section>
    );
};

export default CheckedContainer;