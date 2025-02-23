import React, {lazy, Suspense, ReactNode, useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import GlobalContext from './context';
import {v4 as uuidv4} from 'uuid';

import reportWebVitals from './reportWebVitals';

import Cookies from 'universal-cookie';
import Loader from './UI/loader';
import path from 'path';
import LogoutPage from './pages/logout/LogoutPage';
import { userEndpoint } from './proxy/proxy';


const Navigation = lazy(() => import('./UI/navigation'));
const App = lazy(() => import('./pages/home/HomePage'));
const UserPage = lazy(() => import('./pages/user/UserPage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));

const LazyLoader:React.FC<ChildProps> = ({children}) => {
  return(
    <Suspense fallback={<Loader />}>{children}</Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <LazyLoader><Navigation /></LazyLoader>,
    children: [
      {
        path: '/',
        element: <LazyLoader><App /></LazyLoader>,
      },
      {
        path: 'user',
        element: <LazyLoader><UserPage /></LazyLoader>,
      }
    ],
  },
  {
    path: 'login',
    element: <LazyLoader><LoginPage /></LazyLoader>,
  },
  {
    path: 'logout',
    element: <LazyLoader><LogoutPage /></LazyLoader>,
  }
]

const router = createBrowserRouter(routes);

const ContextWrapper:React.FC<ChildProps> = ({children}) => {

  const [user, setUser] = useState<UserData>({} as UserData);
  const [sessionID, setSession] = useState<string>("");

  useEffect(() => {
    userEndpoint.getUser<UserData>().then((user) => {
      setUser(user);
    });
  }, []);
  

  return (
      <div>
        <GlobalContext.Provider value={{userData: user}}>
          {children}
        </GlobalContext.Provider>
      </div>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
