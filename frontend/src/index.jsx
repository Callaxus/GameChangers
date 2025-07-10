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
import Notification from './components/NotificationsTab';



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
    element: <ExplorePage/>,
  },
  {
    path: "/notifications",
    element: <Notification/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

