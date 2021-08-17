import React from 'react';

const AddProjectBtn = ({ onClick }) => {
    return (
        <i className="las la-plus" onClick={onClick}>Add Project</i>
    );
}

export default AddProjectBtn;