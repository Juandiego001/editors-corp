import { React, useEffect } from 'react';
import styles from './QuienesSomos.module.css';
import PropTypes from 'prop-types';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const QuienesSomos = () => {

  useEffect(() => {
    document.title = "¿Quiénes somos? | Editor's Corp";

    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container-fluid p-0">
      <Menu></Menu>

      <div className="card shadow-lg mt-5 mx-5 py-5">
          <h2 className="m-0 p-0 py-3 text-center">
            ¿Quiénes Somos?
          </h2>

          <p className="mx-5 p-4">
            El presente proyecto fue inicialmente desarrollado para el curso de Ambiente y Desarrollo Web
            de la Universidad Autónoma de Occidente. Cuando se finalizó el curso, el desarrollador que 
            decidió continuar con el proyecto, y quien redacta esta sección, es Juan Diego Cobo Cabal.
            Actualmente, estudiante de Ingeniería Informática de 7to semestre de la universidad mencionada.
          </p>
      </div>
      <Footer ></Footer>
    </div>
  )
};

export default QuienesSomos;
