import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;