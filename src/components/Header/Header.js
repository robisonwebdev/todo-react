import React from 'react';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import '../../styles/Header/Header.css';

const Header = () => {
    return (
        <header>
            <CheckBoxSharpIcon sx={{ fontSize: 35}} />
            <h1>Todo List</h1>
        </header>
    );
}

export default Header;