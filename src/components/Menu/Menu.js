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
        if (cookies.hasOwnProperty("nick")) {
            setNick(cookies["nick"]);
        }
    }, []);

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
                    {
                        nick != "" ?
                            (
                                <>
                                    <li className="nav-item">
                                        <Link to={"/mi-perfil/" + nick} className="btn btn-primary text-light ">Mi perfil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logOut} className="btn btn-primary text-light ">Cerrar sesión</button>
                                    </li>
                                </>
                            )
                            :
                            (
                                <>
                                    <li className="nav-item"><Link className="btn btn-primary text-light ">Iniciar sesión</Link></li>
                                    <li className="nav-item"><Link className="btn btn-primary text-light ">Registrarse</Link></li>
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
