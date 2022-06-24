import React from 'react';
import styles from './QuienesSomos.module.css';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// React-bootstrap
import Container from 'react-bootstrap/Container';

const QuienesSomos = () => {

  return (
    <Container className="p-0" fluid>
      <Menu></Menu>

      <Container className="card shadow-lg mt-5">
          <h2 className="py-5 text-center" fluid>
            ¿Quiénes Somos?
          </h2>

          <p className="px-4">
            El presente proyecto fue inicialmente desarrollado para el curso de Ambiente y Desarrollo Web
            de la Universidad Autónoma de Occidente. Cuando se finalizó el curso, el desarrollador que 
            decidió continuar con el proyecto, y quien redacta esta sección, es Juan Diego Cobo Cabal.
            Actualmente, estudiante de Ingeniería Informática de 7to semestre de la universidad mencionada.
          </p>
      </Container>
      <Footer ></Footer>
    </Container>
  )
};

export default QuienesSomos;
