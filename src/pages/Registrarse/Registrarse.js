import React from 'react';
import PropTypes from 'prop-types';
import styles from './Registrarse.module.css';

const Registrarse = () => {

  const [nick, setNick] = React.useState(); 
  const [biografia, setBiografia] = React.useState(); 
  const [nombre, setNombre] = React.useState();
  const [correo, setCorreo] = React.useState();
  const [contrasena, setContrasena] = React.useState();

  function iniciarRegistro(){
    
  }

  return(
  <form id="formRegistro" className={styles.formRegistro}>

      <h1>Crea tu cuenta de Editor's Corp</h1>

      <p className={styles.mensaje} >
        ¡Gracias por tu interes en unirte a esta comunidad, Game On! Por favor, responde cuidadosamente este formulario. Aclaración: este pre-registro no garantiza la acreditación del trabajo a convenir por el momento
      </p>
      
      <p>Ingresa tu correo:</p>
      <input className={styles.registro} type="text" name="correo" id="correo" placeholder="correo" />

      <p>Cree una contraseña:</p>
      <input className={styles.registro} type="password" name="contrasena" id="contrasena" placeholder="contraseña" />

      <p>Verifique la contraseña:</p>
      <input className={styles.registro} type="password" name="vfContrasena" id="vfContrasena" placeholder="contraseña" />

      <p>¿Cuál es el nombre de usuario?</p>
      <input className={styles.registro} type="text" name="nickname" id="nickname" placeholder="Nombre de Usuario" />

      <p>Información personal</p>
      <input className={styles.registro} type="text" name="nombre" id="nombre" placeholder="Nombre" />
      <input className={styles.registro} type="text" name="apellido" id="apellido" placeholder="Apellido" />

      <p>¿En cuál de nuestros espacios te interesa participar?</p>
      <input type="checkbox" name="cocina" id="cocina"/><span> Cocina.</span><br/>
      <input type="checkbox" name="arte" id="arte"/><span> Arte.</span><br/>
      <input type="checkbox" name="infantil" id="infantil"/><span> Infantil.</span><br/>
      <input type="checkbox" name="videojuegos" id="videojuegos"/><span> Videojuegos.</span><br/>
      <input type="checkbox" name="shorts" id="shorts"/><span> Shorts.</span><br/>
      <input type="checkbox" name="viajes" id="viajes"/><span> Viajes.</span><br/>
      <input type="checkbox" name="musicales" id="musicales"/><span> Músicales.</span><br/>
      <input type="checkbox" name="recopilaciones" id="recopilaciones"/><span> Recopilaciones.</span><br/>
      <input type="checkbox" name="montajes" id="montajes"/><span> Montajes.</span><br/>
      
      <p>¡Cuéntanos más al respecto!</p>
      <input className={styles.historia} type="text" name="bio" id="bio" placeholder="type here/escribe aquí ..."/>
      <input onClick={iniciarRegistro} className={styles.botonr} type="submit" value="Registrarse" />
      <a className="btn btn-success m-0 ms-3" href="#/">Iniciar sesión</a>

  </form>
)};

export default Registrarse;
