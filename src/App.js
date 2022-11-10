import React from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Characters } from './components/Characters.js';
import {ThemeContext} from '../src/context/ThemeContext'

function App() {
  const {darkMode} = React.useContext(ThemeContext);
  return (
    <div className={!darkMode ? 'App' : 'App-dark-mode'}>
        <h1>Hello World</h1>
        <Header />
        <Characters/>
    </div>
  );
}

export default App;

