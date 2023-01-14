import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PerfilEditor.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import TratoService from '../../services/Trato.Service';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Videos

const PerfilEditor = () => {

    const [mostrarOpiniones, setMostrarOpiniones] = useState(false);
    const [mostrarProyectos, setMostrarProyectos] = useState(false);

    function handleMostrarOpiniones() {
        setMostrarOpiniones(!mostrarOpiniones);
    }

    function handleMostrarProyectos() {
        setMostrarProyectos(!mostrarProyectos);
    }

    return (
        <Container className="p-0 bg-light" fluid="true">
            <Menu></Menu>
        
            {/* <!-- Perfil del editor --> */}
            <Container className="p-0" fluid="true">
                <Container className="mt-5">
                    <Container className="text-center">
                        <FontAwesomeIcon className="h1 m-0 p-0" icon={faUser} fluid="true"/>
                    </Container>
                    <h2 className="d-flex justify-content-center m-0">
                        Flioraquv
                    </h2>
                </Container>
        
                {/* <!-- Agregar amigo - Nombre editor - Contactar - Mostrarse con apodo --> */}
                <Row className="justify-content-md-center w-100 my-3">
                    <Col className="text-center p-0">
                        <Button className="w-75" variant="success">
                            <i className="fa fa-user-plus me-2"></i>
                            Agregar amigo
                        </Button>
                    </Col>
                    <Col className="text-center p-0">
                        <Button className="w-75" variant="primary">
                            <i className="fa fa-envelope-square"></i>
                            Contactar
                        </Button>
                    </Col>
                    <Col className="text-center p-0">
                        <Button className="w-75" variant="light">
                            Mostrarse con apodo
                        </Button>
                    </Col>
                </Row>
                
                {/* <!-- Opciones: 'Opiniones' y 'Proyectos personales' --> */}
                <Row className="w-100 m-0 px-2">
                    <Col className="p-0 text-center">
                        <Button className="w-100" variant="outline-success" onClick={handleMostrarOpiniones}>
                            Opiniones
                        </Button>
                    </Col>
                    <Col className="p-0 text-center">
                        <Button className="w-100" variant="outline-primary" onClick={handleMostrarProyectos}>
                            Proyectos personales
                        </Button>
                    </Col>
                </Row>
                
                {/* <!-- Alert Opiniones --> */}
                <Alert className="p-0 mt-5 w-100 border-0" variant="light" show={mostrarOpiniones}>
                    {/* <!-- Opinión + Video #1 --> */}
                    <Row className="bg-success p-0 m-0 align-items-center py-3">
                        {/* <!-- Opinión --> */}
                        <Col>
                            <Row>
                                {/* <!-- Comentario --> */}
                                <Col className="text-light text-end">
                                    La edición fue agradable, la interacción con el editor fue amena, 
                                    se tardó poco pero 100% recomendado.
                                </Col>

                                {/* <!-- Estrellas --> */}
                                <Col className="d-flex align-items-center justify-content-center">
                                    <h3 className="m-0 p-0 text-center">
                                        <FontAwesomeIcon className="text-light" icon={faStar} />
                                        <FontAwesomeIcon className="text-light" icon={faStar} />
                                        <FontAwesomeIcon className="text-light" icon={faStar} />
                                        <FontAwesomeIcon className="text-light" icon={faStar} />
                                        <FontAwesomeIcon className="text-light" icon={faStar} />
                                    </h3>
                                </Col>
                            </Row>
                
                
                            {/* <!-- Acerca del cliente --> */}
                            <Container className="text-center mt-3" fluid="true">
                                <Button variant="success">
                                    <FontAwesomeIcon className="text-light me-3" icon={faUser} />
                                    Juan Diego Cobo
                                </Button>
                            </Container>
                        </Col>
                
                        {/* <!-- Video --> */}
                        <Col className="d-flex justify-content-center align-items-center">
                            <video className="w-75" controls>
                                <source src="/videos/video_ejemplo.mp4" type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                </Alert>
                
                {/* <!-- Div de los proyectos personales --> */}
                <Alert className="p-0 m-0 mt-5 w-100 border-0" show={mostrarProyectos}>
                    {/* <!-- Información video + video #1 --> */}
                    <Row className="w-100 p-0 bg-primary py-3 m-0">
                        {/* <!-- Información acerca del video --> */}
                        <Col className="d-flex justify-content-center align-items-center">
                            {/* <!-- Titulo --> */}
                            <Row>
                                <h2 className="text-light text-center">
                                    Titulo del video
                                </h2>

                                {/* <!-- Descripción --> */}
                                <h3 className="text-light text-center">
                                    Descripción
                                </h3>

                                <p className="text-light text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Esse aut vitae debitis mollitia qui praesentium ipsum laborum unde eos, provident minima quod
                                     asperiores animi eveniet reprehenderit, ducimus quae inventore libero.
                                </p>
                            </Row>
                        </Col>
                
                       {/* <!-- Video --> */}
                       <Col className="p-0 d-flex justify-content-center align-items-center">
                            <video className="w-75" controls>
                                <source src="/videos/video_ejemplo.mp4" type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                </Alert>
                
                {/* <!-- Datos del editor --> */}
                <Container className="bg-light w-100 p-0 mt-5" fluid="true">
                    <h2 className="w-100 py-2 text-center">Datos del editor</h2>
                    <p className="bg-light p-3 text-justify w-75 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, exercitationem sit ut modi error veniam unde ipsam facilis necessitatibus odit tempora quis id animi. Quod recusandae eum reiciendis tenetur deleniti!
                        Consectetur eius aut ducimus doloribus fugiat saepe enim eaque ipsa porro explicabo iure harum eveniet cum dolores maxime ut, dolorem laudantium aliquid at repellendus minima sapiente optio nobis. Suscipit, laborum?
                        Fugiat culpa alias accusamus? Eligendi consequatur esse sed, adipisci alias nobis at, ut, nostrum iusto fuga minus aperiam qui quos omnis voluptatum! Ullam, rerum. Sequi est debitis nulla doloremque voluptatum!
                        Dolores omnis, illum odit asperiores temporibus amet perspiciatis sequi cum praesentium inventore. Quae, dolorem. Saepe nemo earum, molestiae consectetur officia quidem, modi atque facere odio explicabo commodi odit debitis? Laudantium.
                        Amet quisquam quae ipsa voluptatibus? Et neque unde eius deleniti minus expedita nostrum ratione pariatur eos dolor quibusdam tempora quidem, necessitatibus accusantium exercitationem velit error ab rem dicta magnam consequuntur.
                    </p>
                </Container>
            </Container>

        <Footer></Footer>
      </Container>
    )};

export default PerfilEditor;
