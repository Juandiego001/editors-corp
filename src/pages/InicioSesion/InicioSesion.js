import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InicioSesion.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';


// Services
import UsuarioService from '../../services/Usuario.Service';

const InicioSesion = (props) => {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [theModal, setTheModal] = useState(0);

  // Funciones Handle
  function handlenickname(event) {
    setNickname(event.target.value);
  }

  function handleContrasena(event) {
    setContrasena(event.target.value);
  }

  /*
    Función para iniciar sesión
  */
  function iniciarSesion(e) {
    // Primero se verifica que todos los campos estén completos
    if (nickname === '' || contrasena === '') {
      setTheModal(3);
    } else {
      // Se intenta iniciar sesión con el nickname y la contraseña digitados
      UsuarioService.login(nickname, contrasena)
        .then(res => {
          // res.data será true o false
          console.log(res);
          if (res.data) {
            setCookies('nick', nickname, {
              path: '/'
            });

            navigate('/');
          } else {
            setTheModal(3);
          }
        })

        // Ocurrió un error al intentar iniciar sesión
        .catch(err => {
          setTheModal(2);
          console.log(err);
        });
    }

    e.preventDefault();
  }

  // Para volver a poner el modal en 0 de tal manera que no se muestre en la página
  function resetModal(e) {
    setTheModal(0);
    e.preventDefault();
  }

  useEffect(() => {
    document.title = "Iniciar sesión | Editor's Corp";

    // Para ubicar en la parte superior siempre
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-100 vh-100">
      <div className="h-25 w-100 m-0">
        <h1 className="bg-primary text-light d-flex justify-content-center align-items-center text-center py-3">Editor's Corp</h1>
      </div>

      {/* Formulario para iniciar sesión */}
      <form className="w-75 mx-auto h-75">
        <div className="form-group mb-3">
          <label className="form-label">Nickname</label>
          <input className="form-control" name="nickname" id="nickname" type="text" placeholder="Ingresa tu nickname" onChange={handlenickname} />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input className="form-control" name="pasword" id="password" type="password" placeholder="******" onChange={handleContrasena} />
        </div>

        <div className="mt-5 row">
          <div className="col text-center">
            <button className="btn btn-primary w-75" onClick={iniciarSesion}>
              Iniciar sesión
            </button>
          </div>

          <div className="col text-center">
            <Link className="btn btn-light w-75 " to="/singup">
              Registrarse
            </Link>
          </div>

        </div>
      </form>

      {/* Para los modals */}
      {/* Modals
        1. Usuario o contraseña incorrectos
        2. Ocurrió un error en el servidor
        3. Por favor digite un usuario y una contrasena
      */}
      <div className={"m-0 p-0 w-100 justify-content-center " + styles.ModalDigitar + " " + (theModal != 0 ? "d-flex" : "d-none")}>
        <div className="m-0 p-0 bg-light shadow-lg">
          <div className="m-0 p-0 row g-0 p-3 text-dark border-secondary border-bottom">
            <div className="m-0 p-0 col-10">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Error</h1>
            </div>
            <div className="m-0 p-0 col-2 text-end">
              <button type="button" className="btn-close" onClick={resetModal}></button>
            </div>
          </div>

          <p className="p-3 m-0">
            {
              theModal == 1 ?
                "Usuario o contraseña incorrectos."
                :
                theModal == 2 ?
                  "Ocurrió un error en el servidor."
                  :
                  theModal == 3 ?
                    "Por favor digite un usuario y una contraseña."
                  :
                    ""
            }
          </p>

          <div className="p-3 text-end">
            <button type="button" className="btn btn-secondary" onClick={resetModal}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  )
};

InicioSesion.propTypes = {};

InicioSesion.defaultProps = {};

export default InicioSesion;
