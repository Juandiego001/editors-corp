import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MisionVision.module.css';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const MisionVision = () => {

  useEffect(() => {
    document.title = "Misión y visión | Editor's Corp";
    window.scrollTo(0,0);
  }, []);

  return (
  <div className="m-0 p-0" fluid>
    <Menu ></Menu>
    
    {/* <!-- Contenedor de misión y visión --> */}
    <div className="mt-5 py-5 card shadow-lg mx-5">
        <h2 className="text-center mb-4">
          Misión
        </h2>

        <p className="text-justify px-5 mx-5">
            La misión de Editor's Corp es permitir que todos los creadores de contenido tengan la posibilidad 
            de encontrar un editor para sus videos relacionados a cualquier tipo de contenido para la plataforma 
            "Youtube", y de esta manera mostrar así lo mejor de su contenido al mundo.
        </p>

        <h2 className="text-center my-4">
          Visión
        </h2>

        <p className="text-justify px-5 mx-5">
          La visión de Editor's Corp es ser una excelente plataforma en la que contengan los mejores editores
            de video para así mismo brindar la mejor calidad, y ofrecer al mundo una variedad grande de 
            opciones para satisfacer las necesidades o deseos de los "creadores de contenido".
        </p>      
    </div>

    <Footer></Footer>
  </div>
)};

export default MisionVision;
