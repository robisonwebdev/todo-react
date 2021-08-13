import React from 'react';
import '../styles/Projects.css';

const Projects = ({ text }) => {
    return (
        <div className='Projects'>
            <i class="las la-tasks"></i>
            <p>{text}</p>
            <i class="las la-trash"></i>
        </div>
    );
}

export default Projects;