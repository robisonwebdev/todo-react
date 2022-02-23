import React from 'react';
import '../styles/Footer.css';

const Footer = ({ address, name, text }) => {
    return (
        <div id='Footer'>
            <p>{text} <a href={address} target='_blank' rel='noreferrer'>{name}</a></p>
        </div>
    );
}

export default Footer;