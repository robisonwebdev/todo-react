import React from 'react';
import '../../styles/Footer/Footer.css';

const Footer = ({ address, name, text }) => {
    return (
        <footer>
            <p>{text} <a href={address} target='_blank' rel='noreferrer'>{name}</a></p>
        </footer>
    );
}

export default Footer;