import React from 'react';
import '../../styles/Main/Button.css';

const Button = ({ className, onClick, text }) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
}

export default Button;