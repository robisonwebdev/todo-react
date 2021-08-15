import React from 'react';
import '../styles/Project.css';

const Project = ({ text, onClick }) => {
    return (
        <div className='Project'>
            <div className='projectItem' onClick={() => onClick(text)}>
                <i className="las la-tasks"></i>
                <p>{text}</p>
            </div>            
            <i className="las la-trash"></i>
        </div>
    );
}

export default Project;