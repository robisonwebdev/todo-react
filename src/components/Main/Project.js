import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import '../../styles/Main/Project.css';

const Project = ({ deleteProject, projectID, text, viewProject }) => {
    return (
        <div className='project'>
            <div className='project_name' onClick={() => viewProject(projectID)}>
                <FormatListBulletedIcon sx={{ fontSize: 18 }} />
                <p>{text}</p>
            </div>
            <div className='project_trash'>
                <DeleteForeverIcon sx={{ fontSize: 20 }} onClick={() => deleteProject(projectID)} />
            </div>
        </div>
    );
}

export default Project;