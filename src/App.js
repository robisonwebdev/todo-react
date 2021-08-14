import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Fishing',
    },
    {
      title: 'Job',
    }
  ]);

  const addProject = (value) => {
    let newObject = {
      title: value,
    }
    setProjects(prevState => [...prevState, newObject])
  }

  return (
    <div id='App'>
      <Header />
      <Main projects={projects} addProject={addProject} />
      <Footer address='https://github.com/robisonwebdev' name='David Robison' text='Developed by ' />
    </div>
  );
}

export default App;