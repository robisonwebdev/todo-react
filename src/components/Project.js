import React from 'react';
import '../styles/Project.css';

const Project = ({ text }) => {
    return (
        <div className='Project'>
            <div className='projectItem'>
                <i class="las la-tasks"></i>
                <p>{text}</p>
            </div>            
            <i class="las la-trash"></i>
        </div>
    );
}

export default Project;