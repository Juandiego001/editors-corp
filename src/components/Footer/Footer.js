import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = (props) => {

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

    return(
  // <!-- Pie de página -->
    <footer className="row bg-dark w-100 no-gutters m-0">
        {/* <!-- Brand --> */}
        <h1 className="col-4 d-flex justify-content-center align-items-center">
            <a onClick={() => {
                    hacia = 'index';
                    navegarMenu();
                }
            } className="nav-link text-light">
                Editor's Corp &copy;
            </a>
        </h1>
        

        {/* <!-- Contenedor de menús: Serán dos menús para abarcar el espacio --> */}
        <div className="col d-flex align-items-center">
            <nav className="col navbar justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'perfil-editor';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Búsqueda de editores</a></li>
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'tipos-editores';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Tipos de editores</a></li>
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'mision-vision';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Misión y Visión</a></li>
                </ul>
            </nav>

            <nav className="col navbar justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'terminos';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Marco Legal</a></li>
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'contacto';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Contacto</a></li>
                    <li className="nav-item"><a onClick={() => {
                            hacia = 'quienes-somos';
                            navegarMenu();
                        }
                    } className="nav-link text-light text-center">Quiénes somos</a></li>
                </ul>
            </nav>
        </div>
    </footer>
)};

export default Footer;
