import React from 'react';
import styles from './Menu.module.css';
import PropTypes from 'prop-types';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
        <Navbar bg="primary" className="text-light" expand="lg">
            <Container className="col">
                <Navbar.Brand className="ms-2 text-light" href="/index">Editor's Corp</Navbar.Brand>
                <Navbar.Toggle className="text-light" aria-controls="basic-navbar-nav" />
            </Container>

            <Navbar.Collapse className="col flex-row-reverse">
                <Nav className="mx-2">
                    <Nav.Link className="text-light btn btn-primary">Búsqueda de editores</Nav.Link>
                    <Nav.Link href="/tipos-editores" className="text-light btn btn-primary">Tipos de editores</Nav.Link>
                    <Nav.Link className="text-light btn btn-primary">Mi perfil</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
