import React from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import styles from './Index.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Index = (props) => {
    const [cookies, setCookies] = useCookies();

    return (
        <Container className="p-0" fluid>
            {/* Menú de la página */}
            <Menu></Menu>
        
            {/* <!-- Lugar donde se publicarán noticias o videos que algunos editores estén dispuestos a publicar --> */}
            <Container fluid>
        
                {/* <!-- Ejemplo #1 de publicacion --> */}
                <Container className="mt-5">

                    <Container fluid>
                        <Button variant="light">
                            Admin
                        </Button>
                    </Container>

                    {/* Publicación en cuestión (img, video, etc) */}
                    <Container className="m-0" fluid>
                        <img className="w-100" src="./imgs/example.jpg" alt="Imagen de ejemplo publicación"/>
                    </Container>
        
                    <Container className="row mt-4" fluid>
                        <Container className="col text-center" fluid>
                            <Button className="w-75" variant="primary">
                                Me gusta
                            </Button>
                        </Container>

                        <Container className="col text-center" fluid>
                            <Button className="w-75" variant="success">
                                Comentar
                            </Button>
                        </Container>
                        
                        <Container className="col text-center" fluid>
                            <Button className="w-75" variant="light">
                                Descripción
                            </Button>
                        </Container>
                    </Container>

                </Container>
        
            </Container>

            {/* Footer de la página */}
            <Footer></Footer>
        </Container>
    )
};

export default Index;
