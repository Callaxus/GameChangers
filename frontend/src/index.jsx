import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import NovaConta from './components/NovaConta';
import PerfilUsuario from './components/UserPage';


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
    path: "/perfilusuario",
    element: <PerfilUsuario/>,
  },

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
