import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Menu = (props) => {

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
    <>
        <header className="row bg-primary container-fluid m-0 p-0">
            {/* Se encierra el botón del para desplegar el menú en un h1 para tener una fuente de texto más grande */}
            <h1 className="col-1 p-0 m-0 d-flex justify-content-center align-items-center bg-info">
                <button className="btn p-0 border-0 w-100 h-100 text-light btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i className="fa fa-bars"></i>
                </button>
            </h1>        
            
            {/* Botón para buscar */}
            <h1 className="col-1 p-0 m-0 d-flex justify-content-center align-items-center bg-info">
                <button className="btn p-0 border-0 w-100 h-100 text-light btn-info" type="button">
                <i className="fa fa-search"></i>
                </button>
            </h1>

            {/* Texto de editors corp */}
            <h1 className="col-7 text-center text-light d-flex justify-content-center align-items-center p-0 m-0">
                <a onClick={() => {
                        hacia = 'index';
                        navegarMenu();
                    }
                } className="nav-link text-light">Editor's Corp</a>
            </h1>

            {/* Inicio de sesión - Reigstrarse - Ver mensajes */}
            <div className="col p-0 bg-info">
                <nav className="row h-50 navbar navbar-expand-xl p-0 m-0 bg-info">
                    { comprobarInicio() }
                </nav>

                <h5 className="row h-50 d-flex w-100 p-0 m-0 justify-content-center align-items-center">
                    <button className="btn btn-info w-100 h-100">
                        <i className="fa fa-comments text-light"></i>
                        <span className="text-light">&emsp;Mensajes</span>
                    </button>
                </h5>
            </div>
        </header>
    </>
    )};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
