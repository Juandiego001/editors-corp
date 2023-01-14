import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Index from './pages/Index/Index';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import Registrarse from './pages/Registrarse/Registrarse';
import PerfilEditor from './pages/PerfilEditor/PerfilEditor';
import TiposEditores from './pages/TiposEditores/TiposEditores';
import MisionVision from './pages/MisionVision/MisionVision';
import Terminos from './pages/Terminos/Terminos';
import Contacto from './pages/Contacto/Contacto';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Trato from './pages/Trato/Trato';
import MetodosPagos from './pages/MetodosPagos/MetodosPagos';

const router = createBrowserRouter([ 
  {
    path: "/", 
    element: <Index /> 
  },
  {
    path: "/login",
    element: <InicioSesion />
  },
  {
    path: "/singup", 
    element: <Registrarse />
  },
  {
    path: "/mi-perfil/:miperfil",
    element: <PerfilEditor />
  },
  {
    path: "/registrarse",
    element: <Registrarse />
  },
  {
    path: "/tipos-editores",
    element: <TiposEditores />
  },
  {
    path: "/mision-vision",
    element: <MisionVision />
  },
  {
    path: "/terminos",
    element: <Terminos />
  },
  {
    path: "/contacto",
    element: <Contacto />
  },
  {
    path: "/quienes-somos",
    element: <QuienesSomos /> 
  },
  {
    path: "/trato",
    element: <Trato />
  },
  {
    path: "/metodos-pagos",
    element: <MetodosPagos />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
