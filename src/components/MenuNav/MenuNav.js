import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MenuNav.module.css';

const MenuNav = (props) => {

  const location = useLocation();
  const history = useHistory();
  let hacia = '';

  const navegarMenu = () => {    
      history.push({
        pathname: '/' + hacia,
        state: {
          nick: props.nick
        }
      });
  }

  return (
    <nav id="collapseExample" className="collapse navbar-collapse w-100 bg-info">
        <ul className="navbar-nav w-100">
            <li className="nav-item"><a onClick={() => {
              hacia = 'perfil-editor';
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Búsqueda de editores</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'tipos-editores'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Tipos de editores</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'mision-vision'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Misión y Visión</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'terminos'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Marco legal</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'contacto'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Contacto</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'quienes-somos'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Quienes somos</a></li>

            <li className="nav-item"><a onClick={() => {
              hacia = 'admin'
              navegarMenu();
              }} className="nav-link btn btn-info text-center text-light">Administrador</a></li>
        </ul>
    </nav>
)};

export default MenuNav;
