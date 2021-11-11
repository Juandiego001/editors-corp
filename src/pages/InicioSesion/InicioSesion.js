import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './InicioSesion.module.css';
import UsuarioService from '../../services/Usuario.Service';

const InicioSesion = (props) => {
  const history = useHistory();

  // Variables para valores de input de nickname y password
  const [nickName, setNickName] = React.useState();
  const [contrasena, setContrasena] = React.useState()

  // Se encargan de actualizar el estado
  function handleNickName(event){
    setNickName(event.target.value);
  }

  function handleContrasena(event){
    setContrasena(event.target.value);
  }

  // Se verifica si el NickName existe
  function verificarNick(event){
    const siExisteNick = UsuarioService.verificarNick(nickName);
    siExisteNick.then(resNick => {
        if (resNick.data == '') {
          alert('Lo sentimos. El nick digitado no existe');
        } else {
          console.log(resNick.data);
          console.log("Contrasena");
          console.log(contrasena);
          const contrasenaCorrecta = UsuarioService.logIn(nickName, contrasena);

          contrasenaCorrecta.then(resLogIn => {
            if (resLogIn.data == '') {
              alert('Lo sentimos. La contraseña es incorrecta');              
              console.log(resLogIn);
            } else {
              alert('Inicio de sesión exitoso!');
              console.log(resLogIn);
              history.push({
                pathname: '/index',
                search: '?nick=true',  // query string
                state: {  // location state
                  nick: nickName
                }
              });
            }
          })
        }
      })
      .catch(err => {
        alert('Lo sentimos. Ocurrió un error');
        console.log(err);
      });

    alert('Se ejecutó la función.');

    event.preventDefault();
  }

  return (
    <form id="formInicio" className={styles.formLogin}>
          <h1>Iniciar sesión</h1>
          <input className={styles.control} type="text" name="nickname" id="nickname" placeholder="nickname" onChange={handleNickName}/>
          <input className={styles.control} type="password" name="contrasena" id="contrasena" placeholder="contraseña" onChange={handleContrasena}/>
          <input className={styles.botons} onClick={verificarNick} type="submit" value="Iniciar" />
          <p><a href="#">¿Olvidó su contraseña?</a> ó  <a href="#/registrarse">¿No tiene cuenta?</a></p>
    </form>
  )
};

export default InicioSesion;
