import React from 'react';
import styles from './QuienesSomos.module.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const QuienesSomos = () => {

  const location = useLocation();

  return (
  <>
    <Menu nick={location.state.nick}></Menu>
    
    <div className={styles.divMyv}>
        <h2><strong>¿Quiénes Somos?</strong></h2>

        <p>
            Somos un grupo de ingenieros que estamos emprendiendo con una aplicativo software que ayude especificamente a la comunidad de las redes sociales. 
            Esta iniciativa nació por parte de un integrante del grupo debido a que el se dedicaba tanto a edicion de video (Freelancer) como creación de contenido. Se busca ayudar que todas las personas tengan la posibildad de encontrar a un individuo que haga parte del proceso que requiera el usuario <strong>("YouTuber")</strong>. 
            Esta pagina es totalmente usable y es intuitiva tambien se tiene un diseño minimalista en busca una mayor comodidad y comprensión para el usuario. Se realizó este proyecto con bastante empeño para que sea una pagina reconocida a futuro. 
            <br/>
            <br/>
            Los desarrolladores que han trabajado y continuan para el mejoramiento de la pagina son los siguientes individuos:
            <ul className={styles.lista}>
                <br/>
                <strong>
                  <li>Santiago Castaño Henao<a href=""><img className={styles.insta} src="./imgs/Insta.png" alt="Imagen de insta"/></a></li>
                  <li>Juena Diego Cobo<a href=""><img className={styles.insta} src="./imgs/Insta.png" alt="Imagen de insta"/></a></li>
                  <li>Ivan Melo<a href=""><img className={styles.insta} src="./imgs/Insta.png" alt="Imagen de insta"/></a></li>
                  <li>José Manuel Galvis<a href=""><img className={styles.insta} src="./imgs/Insta.png" alt="Imagen de insta"/></a></li>
                </strong>
            </ul>
        </p>
    </div>
    <Footer nick={location.state.nick}></Footer>
  </>
)};

export default QuienesSomos;
