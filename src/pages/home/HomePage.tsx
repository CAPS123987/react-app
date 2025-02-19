import React from 'react';
import logo from './logo.svg';
import { usePageTitle } from '../../hooks';
import Loader from '../../UI/loader';
//import './App.css';

function App() {
  usePageTitle('Domov');

  return (
    <div className="App">
      This is MAIN page app content
    </div>
  );
}

export default App;
