import React from 'react';
import Projects from './Projects';
import Lists from './Lists';
import '../styles/Main.css';

const Main = () => {
    return (
        <div id='Main'>
            <Projects />
            <Lists />
        </div>
    );
}

export default Main;