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
<<<<<<< HEAD
import Categorias from './components/TodasCategorias';
import CriarAnuncio from './components/CriarAnuncio';
=======
>>>>>>> 3e7eabcba6dde4173d45d9577ecff677143711eb

>>>>>>> 120d682a81aef52f54edecd39b76789642d53d6e


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
<<<<<<< HEAD
  },
   {
    path: "/categorias",
    element: <Categorias/>,
  },
  {
    path: "/criar_anuncio",
    element: <CriarAnuncio/>,
  },
=======
  }
>>>>>>> 3e7eabcba6dde4173d45d9577ecff677143711eb
>>>>>>> 120d682a81aef52f54edecd39b76789642d53d6e
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

