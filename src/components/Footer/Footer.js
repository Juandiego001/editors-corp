import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    const location = useLocation();

    return (
        <footer className="row bg-light w-100 align-items-center py-3 mt-5 w-100">
            {/* <!-- Brand --> */}

            <Button className="col" variant="light" href="#" active>
                <h1 className="text-dark">
                    Editor's Corp &copy;
                </h1>
            </Button>


            {/* <!-- Contenedor de menús: Serán dos menús para abarcar el espacio --> */}
            <Navbar className="col justify-content-center text-center" bg="light">
                <Nav className="flex-column">
                    <Nav.Link className="text-dark">Búsqueda de editores</Nav.Link>
                    <Nav.Link className="text-dark">Tipos de editores</Nav.Link>
                    <Nav.Link className="text-dark">Misión y visión</Nav.Link>
                </Nav>
            </Navbar>

            <Navbar className="col d-flex justify-content-center text-center" bg="light">
                <Nav className="flex-column">
                    <Nav.Link className="text-dark">Marco legal</Nav.Link>
                    <Nav.Link className="text-dark">Contacto</Nav.Link>
                    <Nav.Link className="text-dark">Quienes somos</Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    )
};

export default Footer;
