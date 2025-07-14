import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import CriarAnuncio from './components/CriarAnuncio';
import ExplorePage from './components/ExplorePage';
import LoginPage from './components/LoginPage';
import NotificationsTab from './components/NotificationsTab';
import NovaConta from './components/NovaConta';
import Perfil from './components/Perfil';
import Categorias from './components/TodasCategorias';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/loginpage", element: <LoginPage /> },
  { path: "/novaconta", element: <NovaConta /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/explore", element: <ExplorePage /> },
  { path: "/notifications", element: <NotificationsTab /> },
  { path: "/categorias", element: <Categorias /> },
  { path: "/criar-anuncio", element: <CriarAnuncio /> },
  { path: "/produto", element: <ProductPage /> },
  { path: "*", element: <NotFoundPage /> }, // fallback route
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
