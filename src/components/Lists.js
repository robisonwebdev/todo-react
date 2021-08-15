import React from 'react';
import '../styles/Lists.css';

const Lists = ({ projectList }) => {
    const projectItems = projectList[0].items.map(item => {
        return <li>{item}</li>
    })
    
    return (
        <div id='Lists'>
            <h1>{projectList[0].title}</h1>
            <ul>
                {projectItems}
            </ul>
        </div>
    );
}

export default Lists;