import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import '../../styles/Main/Project.css';

const Project = ({ deleteProject, projectID, text, viewProject }) => {
    return (
        <div className='project'>
            <div className='project_name' onClick={() => viewProject(projectID)}>
                <PlaylistAddCheckIcon />
                <p>{text}</p>
            </div>
            <DeleteForeverIcon onClick={() => deleteProject(projectID)} />
        </div>
    );
}

export default Project;