import React from 'react';
import PropTypes from 'prop-types';
import styles from './MisionVision.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MisionVision = () => {

  return (
  <Container className="m-0 p-0" fluid>
    <Menu ></Menu>
    
    {/* <!-- Contenedor de misión y visión --> */}
    <Container className="mt-5 py-5 card shadow-lg">
        <h2 className="text-center" fluid>
          <b>Misión</b>
        </h2>

        <p className="text-justify px-5">
            La misión de Editor's Corp es permitir que todos los creadores de contenido tengan la posibilidad 
            de encontrar un editor para sus videos relacionados a cualquier tipo de contenido para la plataforma 
            "Youtube", y de esta manera mostrar así lo mejor de su contenido al mundo.
        </p>

        <h2 className="text-center mt-5" fluid>
          <b>Visión</b>
        </h2>

        <p className="text-justify px-5">
          La visión de Editor's Corp es ser una excelente plataforma en la que contengan los mejores editores
            de video para así mismo brindar la mejor calidad, y ofrecer al mundo una variedad grande de 
            opciones para satisfacer las necesidades o deseos de los "creadores de contenido".
        </p>      
    </Container>

    <Footer></Footer>
  </Container>
)};

export default MisionVision;
