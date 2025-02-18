import React, { ReactNode, useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './UI/nav';
import reportWebVitals from './reportWebVitals';

import Cookies from 'universal-cookie';


const cookies = new Cookies();

const ContextWrapper:React.FC<ContextNodeWrapper> = ({children}) => {

  const [user, setUser] = useState<UserData>({} as UserData);

  useEffect(() => {
    const cookieUName = cookies.get('userName');
    const cookieUEmail = cookies.get('userEmail');

    let cookieUser : UserData;
    if(!cookieUName || !cookieUEmail) {
      cookieUser = {
        isLogged: false
      }
    } else {
      cookieUser = {
        name: cookieUName,
        email: cookieUEmail,
        isLogged: true
      }
    }

    setUser(cookieUser);
  }, []);
  

  return (
      <div>
        <Navigation usersData={user}/>
        {children}
      </div>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
