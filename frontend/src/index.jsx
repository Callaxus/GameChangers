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
<<<<<<< HEAD
=======
import Categorias from './components/TodasCategorias';
import CriarAnuncio from './components/CriarAnuncio';
>>>>>>> cdee85b003490c02fb1265809fda686cfbc307ff



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
=======

    element: <ExplorePage/>,
>>>>>>> cdee85b003490c02fb1265809fda686cfbc307ff
  },
  {
    path: "/notifications",
    element: <Notification/>,
<<<<<<< HEAD
  }
=======
  },
   {
    path: "/categorias",
    element: <Categorias/>,
  },
  {
    path: "/criar_anuncio",
    element: <CriarAnuncio/>,
  },
>>>>>>> cdee85b003490c02fb1265809fda686cfbc307ff
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

