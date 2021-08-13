import React from 'react';
import '../styles/Project.css';

const Project = ({ text }) => {
    return (
        <div className='Project'>
            <div className='projectItem'>
                <i className="las la-tasks"></i>
                <p>{text}</p>
            </div>            
            <i className="las la-trash"></i>
        </div>
    );
}

export default Project;