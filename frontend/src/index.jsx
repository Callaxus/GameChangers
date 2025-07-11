import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import LoginPage from './components/LoginPage';
import NovaConta from './components/NovaConta';
import Perfil from './components/Perfil';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ExplorePage from './components/ExplorePage';
<<<<<<< HEAD

=======
import Notification from './components/NotificationsTab';
>>>>>>> 3e7eabcba6dde4173d45d9577ecff677143711eb



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loginpage",
    element: <LoginPage/>,
  },
  {
    path: "/novaconta",
    element: <NovaConta/>,
  },
  {
    path: "/perfil",
    element: <Perfil/>,
  },
  {
    path: "/explore",
<<<<<<< HEAD
    element: <ExplorePage />,
  }
  
=======
    element: <ExplorePage/>,
  },
  {
    path: "/notifications",
    element: <Notification/>,
  }
>>>>>>> 3e7eabcba6dde4173d45d9577ecff677143711eb
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

