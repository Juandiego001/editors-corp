import { React, useEffect, useState } from 'react';
import styles from './Menu.module.css';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
    const [nick, setNick] = useState("");
    const [cookies, setCookies, removeCookie] = useCookies(["nick"]);
    const navigate = useNavigate();

    function logOut() {
        removeCookie("nick");
        navigate("/login");
    }

    useEffect(() => {
        // En caso de que no exista el nick,
        // debe redirigrse a logearse.
        if (cookies.hasOwnProperty("nick")) {
            setNick(cookies["nick"]);
        } else {
            // Se regresa 
            navigate("/login");
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg text-light bg-primary m-0 p-0 py-2">
            <div className="container-fluid col">
                <Link to="/" className="navbar-brand ms-2 text-light">Editor's Corp</Link>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="w-100 navbar-nav">
                    <li className="nav-item">
                        <Link to="/busqueda-editores" className="ps-4 btn btn-primary text-light w-100 text-start">Búsqueda de editores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tipos-editores" className="ps-4 btn btn-primary text-light w-100 text-start">Tipos de editores</Link>
                    </li>
                    {
                        nick != "" ?
                            (
                                <>
                                    <li className="nav-item">
                                        <Link to={"/perfil/" + nick} className="ps-4 btn btn-primary text-light w-100 text-start">Mi perfil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logOut} className="ps-4 btn btn-primary text-light w-100 text-start">Cerrar sesión</button>
                                    </li>
                                </>
                            )
                            :
                            (
                                <>
                                    <li className="nav-item"><Link className="ps-4 btn btn-primary text-light w-100 text-start">Iniciar sesión</Link></li>
                                    <li className="nav-item"><Link className="ps-4 btn btn-primary text-light w-100 text-start">Registrarse</Link></li>
                                </>
                            )
                    }
                </ul>
            </div>
        </nav>
    )
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
