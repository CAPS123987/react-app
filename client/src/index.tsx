import React, {lazy, Suspense, ReactNode, useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import GlobalContext from './context';

import reportWebVitals from './reportWebVitals';

import Cookies from 'universal-cookie';
import Loader from './UI/loader';
import path from 'path';
import LogoutPage from './pages/logout/LogoutPage';

const Navigation = lazy(() => import('./UI/navigation'));
const App = lazy(() => import('./pages/home/HomePage'));
const UserPage = lazy(() => import('./pages/user/UserPage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));

const cookies = new Cookies();

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
        <GlobalContext.Provider value={{usersData: user, cookies: cookies}}>
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
