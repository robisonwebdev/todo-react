import React from 'react';
import '../../styles/Main/Project.css';

const Project = ({ deleteProject, projectID, text, viewProject }) => {
    return (
        <div className='project'>
            <div className='project_name' onClick={() => viewProject(projectID)}>
                <i className="las la-tasks"></i>
                <p>{text}</p>
            </div>            
            <i className="las la-trash" onClick={() => deleteProject(projectID)}></i>
        </div>
    );
}

export default Project;