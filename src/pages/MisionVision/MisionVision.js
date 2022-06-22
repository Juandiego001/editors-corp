import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MisionVision.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const MisionVision = () => {

  const location = useLocation();

  return (
  <>
    <Menu nick={location.state.nick}></Menu>
    

    {/* <!-- Contenedor de misión y visión --> */}
    <div className={styles.divMyv}>
        <h2><strong>Misión</strong></h2>

        <p>La misión de Editor's Corp es permitir que todos los creadores de contenido tengan la posibilidad 
            de encontrar un editor para sus videos relacionados a cualquier tipo de contenido para la plataforma 
            "Youtube", y de esta manera mostrar así lo mejor de su contenido al mundo.
        </p>

        <h2><strong>Visión</strong></h2>

        <p>La visión de Editor's Corp es ser una excelente plataforma en la que contengan los mejores editores
            de video para así mismo brindar la mejor calidad, y ofrecer al mundo una variedad grande de 
            opciones para satisfacer las necesidades o deseos de los "creadores de contenido".
        </p>
    </div>    

    <Footer nick={location.state.nick}></Footer>
  </>
)};

export default MisionVision;
