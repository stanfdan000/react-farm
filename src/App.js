import './App.css';
import React from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import { Animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header name='daniel stanford'/>
      <Main animals={Animals} />
      <Footer date='2022'/>
    </div>
  );
}

export default App;
