import React from 'react';
import styles from './Menu.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
    let hacia = '';

    const navegarMenu = () => {    
        
    }

    function comprobarInicio() {
        
        if (props.nick) {
            return (
                <>
                    <a className="col w-100 h-100 py-2 btn btn-info m-0 text-light" href="#/">Hola, {props.nick}</a>
                    <a className="col w-100 h-100 py-2 btn btn-info m-0 text-light" href="#/">Cerrar sesión</a>
                </>
            );
        } else {
            return (
                <>
                    <a className="col w-100 h-100 py-2 btn btn-info m-0 text-light" href="#/">Iniciar sesión</a>
                    <a className="col w-100 h-100 py-2 btn btn-info m-0 text-light" href="#/registrarse">Registrarse</a>
                </>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg text-light bg-primary">
            <div className="container-fluid col">
                <Link to="/" className="navbar-brand ms-2 text-light">Editor's Corp</Link>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="btn btn-primary text-light ">Búsqueda de editores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tipos-editores" className="btn btn-primary text-light ">Tipos de editores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mi-perfil/1" className="btn btn-primary text-light ">Mi perfil</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
