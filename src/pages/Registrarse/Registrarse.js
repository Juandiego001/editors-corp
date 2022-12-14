import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Registrarse.module.css';
import { Link } from 'react-router-dom';

// Services
import UsuarioService from '../../services/Usuario.Service';

const Registrarse = () => {

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasena1, setContrasena1] = useState("");
  const [nick, setNick] = useState("");
  const [biografia, setBiografia] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [categoria, setCategoria] = useState(1);

  // Para las validaciones de los campos
  /*
    0. Ni válido ni inválido
    1. Inválido
    2. Válido
  */
  const [cCorreo, setCCorreo] = useState(0);

  /* 3. Las contraseñas no coinciden */
  const [cContrasena, setCContrasena] = useState(0);
  const [cContrasena1, setCContrasena1] = useState(0);

  /* 3. Nick ya existe por lo tanto nick inválido. */
  const [cNick, setCNick] = useState(0);

  const [cNombre, setCNombre] = useState(0);
  const [cApellido, setCApellido] = useState(0);

  function handleCorreo(e) {
    setCorreo(e.target.value);
  }

  function handleContrasena(e) {
    setContrasena(e.target.value);
  }

  function handleContrasena1(e) {
    setContrasena1(e.target.value);
  }

  function handleNick(e) {
    setNick(e.target.value);
  }

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  function handleApellido(e) {
    setApellido(e.target.value);
  }

  function handleCategoria(e) {
    setCategoria(e.target.value);
  }

  function handleBiografia(e) {
    setBiografia(e.target.value);
  }

  function verificacionContrasenaRepetida(e) {
    let againPassword = e.target.value;
    if (againPassword == "") {
      setCContrasena1(1);
      return false;
    }

    if (againPassword != contrasena) {
      setCContrasena(3);
      setCContrasena1(3);
      return false;
    }

    setCContrasena(2);
    setCContrasena1(2);
  }

  function verificarCorreo(e) {
    let theEmail = e.target.value;
    let splitEmail = theEmail.split("@");
    if (splitEmail.length == 1) {
      setCCorreo(1);
      return false;
    }

    if (splitEmail[1] == "") {
      setCCorreo(1);
      return false;
    }

    setCCorreo(2);
  }

  function verificarNick(e) {
    let theNick = e.target.value;

    if (theNick == "") {
      setCNick(1);
      return false;
    }

    setCNick(2);
  }


  function iniciarRegistro(event) {
    if (correo == "") {
      setCCorreo(1);
      return false;
    }

    if (contrasena == "") {
      setCContrasena(1);
      return false;
    }

    if (contrasena1 == "") {
      setCContrasena1(1);
      return false;
    }

    if (contrasena != contrasena1) {
      setCContrasena(3);
      setCContrasena1(3);
      return false;
    }

    if (nick == "") {
      setCNick(1);
      return false;
    }

    if (nombre == "") {
      setCNombre(1);
      return false;
    }

    if (apellido == "") {
      setCApellido(1);
      return false;
    }

    UsuarioService.singUp({
      correo: correo,
      contrasena: contrasena,
      nick: nick,
      nombre: nombre,
      apellido: apellido,
      biografia: biografia,
      categoria: categoria
    })
      .then(data => {
        alert('El usuario se ha registrado con éxito!');
        console.log(data);
      })
      .catch(err => {
        alert('Ocurrió un error al registrar el usuario');
        console.log(err);
      })


    event.preventDefault();
  }

  useEffect(() => {
    document.title = "Registrarse | Editor's Corp";

    // Ubicar en la posición inicial
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <h1 className="text-center border-bottom border-primary text-primary py-3">
        Editor's Corp
      </h1>

      <div className="px-5 mt-5 cotnainer-fluid">
        <h4 className="m-0 p-0 text-start">
          Formulario de registro
        </h4>

        <p>
          A continuación, te recomendamos tener en cuenta lo siguiente al momento
          de registrarte:
        </p>

        <ol>
          <li>
            Al registrarte con nosotros puedes tanto solicitar trabajos de edición
            como realizarlos.
          </li>
          <li>
            Puedes realizar publicaciones de tus trabajos deseados los cuales se observarán
            para tus amigos en la sección principal.
          </li>
          <li>
            Por ende, puedes tener amigos como cualquier otra red social.
          </li>
          <li>
            Si eres <i>editor,</i> puedes agregar videos a tu perfil como evidencias
            de trabajos ya realizados anteriormente.
          </li>
          <li>
            Estas y muchas cosas más son las que podrás realizar con nosotros. Observa más en:
            {' '}<Link to="/terminos">términos y condiciones.</Link>
          </li>
        </ol>
      </div>

      <form id="formRegistro" className="mt-5 px-5">
        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="correo">Correo*</label>
          <input className={"form-control " + (cCorreo == 1 ? "is-invalid" : cCorreo == 2 ? "is-valid" : "")} onChange={handleCorreo} onBlur={verificarCorreo} type="email" name="correo" id="correo" placeholder="peresenjo@gmail.com" />
          <div className="form-text">
            No compartiremos tu correo con nadie.
          </div>
          {
            cCorreo == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa un correo válido (Con su caracter "@" y consecuentes).
              </div>
              :
              cCorreo == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="contrasena">Contraseña*</label>
          <input className={"form-control " + (cContrasena == 1 || cContrasena == 3 ? "is-invalid" : cContrasena == 2 ? "is-valid" : "")} onChange={handleContrasena} type="password" name="contrasena" id="contrasena" placeholder="******" required />
          {
            cContrasena == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa una contraseña.
              </div>
              :
              cContrasena == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                cContrasena == 3 ?
                  <div className="invalid-feedback">
                    Las contraseñas no coinciden.
                  </div>
                  :
                  ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="vfContrasena">Repita la contraseña*</label>
          <input className={"form-control " + (cContrasena1 == 1 || cContrasena1 == 3 ? "is-invalid" : cContrasena1 == 2 ? "is-valid" : "")} onChange={handleContrasena1} onBlur={verificacionContrasenaRepetida} type="password" name="vfContrasena" id="vfContrasena" placeholder="******" required />
          {
            cContrasena1 == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa una repetición de la contraseña.
              </div>
              :
              cContrasena1 == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                cContrasena1 == 3 ?
                  <div className="invalid-feedback">
                    Las contraseñas no coinciden.
                  </div>
                  :
                  ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="nickname">Nombre de usuario*</label>
          <input className={"form-control " + (cNick == 1 || cNick == 3 ? "is-invalid" : cNick == 2 ? "is-valid" : "")} onChange={handleNick} onBlur={verificarNick} type="text" name="nickname" id="nickname" placeholder="peres123" required />
          <div className="form-text">
            Con este <i>nickname</i> iniciarás sesión.
          </div>
          {
            cNick == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa un nickname.
              </div>
              :
              cNick == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                cNick == 3 ?
                  <div className="invalid-feedback">
                    El nickname ya existe.
                  </div>
                  :
                  ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label">Nombre/s*</label>
          <input className={"form-control " + (cNombre == 1 ? "is-invalid" : cNombre == 2 ? "is-valid" : "")} onChange={handleNombre} type="text" name="nombre" id="nombre" placeholder="Jose" required />
          {
            cNombre == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa el/los nombre/s.
              </div>
              :
              cNombre == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                  ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="apellido">Apellido/s*</label>
          <input className={"form-control " + (cApellido == 1 ? "is-invalid" : cApellido == 2 ? "is-valid" : "")} onChange={handleApellido} type="text" name="apellido" id="apellido" placeholder="Perensejo" required />
          {
            cApellido == 1 ?
              <div className="invalid-feedback">
                Por favor ingresa el/los apellido/s.
              </div>
              :
              cApellido == 2 ?
                <div className="valid-feedback">
                  ¡Se ve bien!
                </div>
                :
                  ""
          }
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label">Categoría de interés*</label>
          <select className="form-select" type="checkbox" name="cocina" id="cocina" onChange={handleCategoria} required>
            <option defaultChecked value="1">Cocina</option>
            <option value="2">Arte</option>
            <option value="3">Infantil</option>
            <option value="4">Videojuegos</option>
            <option value="5">Shorts</option>
            <option value="6">Viajes</option>
            <option value="7">Músicales</option>
            <option value="8">Recopilaciones</option>
            <option value="9">Montajes</option>
          </select>
          <div className="form-text">
            Ya sea editor o usuario normal ¿qué tipo de videos disfrutas más ver/realizar?
          </div>
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label">Biografía</label>
          <textarea className="form-control" onChange={handleBiografia} type="text" name="bio" id="bio" placeholder="Estudiante de ingeniería multimedia..." />
          <div className="form-text">
            Habla un poco acerca de ti para conectar con los demás usuarios.
          </div>
        </div>

        <div className="row g-0 w-100 p-0 py-4">
          <div className="col">
            <button className="btn btn-primary w-100" onClick={iniciarRegistro}>Registrarse</button>
          </div>

          <div className="col">
            <Link to="/login" className="btn btn-light w-100">Iniciar sesión</Link>
          </div>
        </div>
      </form>
    </div>
  )
};

export default Registrarse;
