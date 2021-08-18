import React from 'react';
import '../styles/Project.css';

const Project = ({ text, deleteProject, projectID, onClick }) => {
    return (
        <div className='Project'>
            <div className='projectItem' onClick={() => onClick(text)}>
                <i className="las la-tasks"></i>
                <p>{text}</p>
            </div>            
            <i className="las la-trash" onClick={() => deleteProject(projectID)}></i>
        </div>
    );
}

export default Project;