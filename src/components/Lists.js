import React from 'react';
import '../styles/Lists.css';

const Lists = ({ projectList }) => {
    return (
        <div id='Lists'>
            <h1>{projectList[0].title}</h1>
        </div>
    );
}

export default Lists;