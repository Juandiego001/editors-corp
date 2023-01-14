import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return (
        <footer className="row align-items-center py-3 mt-5 w-100 mx-0">
            {/* <!-- Brand --> */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center p-0 m-0 ">
                <button className="btn text-dark">
                    <h1>
                        <Link to="/" className="nav-link text-dark">
                            Editor's Corp &copy;
                        </Link>
                    </h1>
                </button>
            </div>


            {/* <!-- Contenedor de menús: Serán dos menús para abarcar el espacio --> */}
            <div className="col-lg-6">
                <div className="row">
                    <div className="col">
                        <nav className="navbar justify-content-center text-center">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark">
                                        Búsqueda de editores
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tipos-editores" className="nav-link text-dark">
                                        Tipos de editores
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/mision-vision" className="nav-link text-dark">
                                        Misión y visión
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col">
                        <nav className="navbar d-flex justify-content-center text-center">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <Link to="/terminos" className="nav-link text-dark">
                                        Marco legal
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contacto" className="nav-link text-dark">
                                        Contacto
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/quienes-somos" className="nav-link text-dark">
                                        ¿Quiénes somos?
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
