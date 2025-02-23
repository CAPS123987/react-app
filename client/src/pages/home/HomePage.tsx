import React, { useContext } from 'react';
import logo from './logo.svg';
import { usePageTitle } from '../../hooks';
import Loader from '../../UI/loader';
import { userEndpoint } from '../../proxy/proxy';
import GlobalContext from '../../context';
//import './App.css';


const HomePage : React.FC = () => {
  usePageTitle('Domov');

  const globalContext = useContext(GlobalContext);

  const btn = () => {
    userEndpoint.getUser();
  }

  return (
    <div className="App">
      This is MAIN page app content
      <button onClick={btn}>Register</button>
    </div>
  );
}

export default HomePage;
