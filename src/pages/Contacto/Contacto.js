import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Contacto.module.css';
import Menu from '../../components/Menu/Menu';
import MenuNav from '../../components/MenuNav/MenuNav';
import Footer from '../../components/Footer/Footer';

const Contacto = () => {

  const location = useLocation();

  return (
  <>
    <Menu nick={location.state.nick}></Menu>
    <MenuNav nick={location.state.nick}></MenuNav>
    <div className={styles.divMyv}>
        <h2><strong>Contacto</strong></h2>

        <p>
            <img className={styles.contacto} src="./imgs/logo-Gmail-1.png" alt="Imagen de Gmail"/><strong>&emsp;Correo Electronico:</strong> Editorscorp.col@gmail.com<br/><br/>
            <img className={styles.tel} src="./imgs/Tel.png.crdownload" alt="Imagen del Telefono"/><strong>&emsp;Telefono:</strong> 5381025<br/><br/>
            <img className={styles.disc} src="./imgs/Discord-Logo.png" alt="Imagen de Discord"/><strong>&emsp;Discord:</strong> <a href="">Editor's Corp</a><br/><br/>
            <img className={styles.twitter} src="./imgs/twitter-logo-2-1.png" alt="Imagen de Twitter"/><strong>&emsp;Twitter:</strong> @EditorsCorp<br/><br/>
            <img className={styles.fb} src="./imgs/1024px-Facebook_Logo_(2019).png" alt="Imagen de Facebook"/><strong>&emsp;Facebook:</strong> Editor's Corp Oficial<br/><br/>
            <img className={styles.yt} src="./imgs/yt.png" alt="Imagen de YouTube"/><strong>&emsp;YouTube:</strong> Editor's Corp
        </p>
    </div>    
    <Footer></Footer>
  </>
)};

export default Contacto;
