import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './InicioSesion.module.css';
import { useCookies } from 'react-cookie';

// React-bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// Services
import UsuarioService from '../../services/Usuario.Service';

const InicioSesion = (props) => {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Modals
  /*
    1. Inicio de sesión exitoso
    2. Usuario o contraseña incorrectos
    3. Ocurrió un error en el servidor
    4. Por favor digite un usuario y una contrasena
  */ 
  const [incorrectos, setIncorrectos] = useState(false);
  const [error, setError] = useState(false);
  const [exitoso, setExitoso] = useState(false);
  const [digite, setDigite] = useState(false);

  // Funciones Handle
  function handlenickname(event){
    setNickname(event.target.value);
  }

  function handleContrasena(event){
    setContrasena(event.target.value);
  }

  function handleModals(id) {
    // Se crea un diccionario con todos los modals
    let modals = {
      1: [exitoso, setExitoso],
      2: [incorrectos, setIncorrectos],
      3: [error, setError],
      4: [digite, setDigite]
    };

    let func = modals[id][1];
    let valor = !(modals[id][0]);

    func(valor);
  }  

  /*
    Función para iniciar sesión
  */
  function iniciarSesion(e){
    // Primero se verifica que todos los campos estén completos
    if (nickname === '' || contrasena === '') {
      handleModals(4);
    } else {
      // Se intenta iniciar sesión con el nickname y la contraseña digitados
      UsuarioService.login(nickname, contrasena)
        .then(res => {
          // res.data será true o false
          console.log(res.data);
          if (res.data) {
            // Se logró iniciar sesión. Se setean las cookies
            // y se envía al inicio
            handleModals(1);

            setCookies('nick', nickname, {
              path: '/'
            });

            navigate('/index');
          } else {
            handleModals(2);
          }
        })        
  
        // Ocurrió un error al intentar iniciar sesión
        .catch(err => {
          handleModals(3);
          console.log(err);
        });
    }

    e.preventDefault();
  }

  return (
    <div className="w-100 vh-100">
      <div className="h-25 w-100 m-0">
        <h1 className="bg-primary text-light d-flex justify-content-center align-items-center text-center py-3">Editor's Corp</h1>
      </div>

      {/* Formulario para iniciar sesión */}
      <Form className="w-75 mx-auto h-75">
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control name="nickname" id="nickname" type="text" placeholder="Ingresa tu nickname"  onChange={handlenickname} />
        </Form.Group>

        
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name="pasword" id="password" type="password"  placeholder="******" onChange={handleContrasena} />
        </Form.Group>

        <Container className="mt-5 row">
          <Container className="col text-center">
            <Button className="w-75" onClick={iniciarSesion}>
              Iniciar sesión
            </Button>
          </Container>

          <Container className="col text-center">
            <Button variant="light" className="w-75">
              Registrarse
            </Button>
          </Container>

        </Container>
      </Form>
    </div>
  )
};

InicioSesion.propTypes = {};

InicioSesion.defaultProps = {};

export default InicioSesion;
