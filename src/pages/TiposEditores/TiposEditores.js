import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TiposEditores.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// React-boostrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


// Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons/faKitchenSet';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons/faPaintbrush';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons/faMasksTheater';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faFaceGrinSquintTears } from '@fortawesome/free-solid-svg-icons/faFaceGrinSquintTears';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';


const TiposEditores = () => {

    const location = useLocation();

    return (
        <Container className="p-0" fluid>
            <Menu></Menu>

            {/* <!-- Section donde se mostrarán las categorías de los tipos de editores --> */}
            <Container fluid>
        
                {/* <!-- Tiutlo de Tipos de editores --> */}
                <Container fluid>
                    <h2 className="w-100 text-center py-5">
                        Tipos de Editores
                    </h2>
                </Container>
        
                {/* <!-- Contenedor de tipos de editores --> */}
                <Container className="row m-0" fluid>
                    <Button className="col" variant="light" href="#">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faKitchenSet} />
                            <span>Cocina</span>
                        </h3>
                    </Button>
        
                    <Button className="col" variant="light" href="#">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faPaintbrush} />
                            <span>Arte</span>
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faChild} />
                            Infantil
                        </h3>
                        </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                        <FontAwesomeIcon className="me-2" icon={faMasksTheater} />
                            Escenario
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faGamepad} />
                            Videojuegos
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faMobileScreen} />
                            Shorts
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faMountain} />
                            Viajes
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faCamera} />
                            Tráilers
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faMusic} />
                            Musicales
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faFaceGrinSquintTears} />
                            Recopilaciones
                        </h3>
                    </Button>
    
                    <Button className="col" variant="light" href="">
                        <h3 className="d-flex text-dark">
                            <FontAwesomeIcon className="me-2" icon={faRocket} />
                            Montajes
                        </h3>
                    </Button>
                </Container>
            </Container>
        
            <Footer></Footer>
        </Container>
    )
};

export default TiposEditores;
