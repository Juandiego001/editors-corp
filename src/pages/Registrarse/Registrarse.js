import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Registrarse.module.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [categorias, setCategorias] = useState([]);

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
  const [cCategorias, setCCategorias] = useState(0);

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

  function handleCategorias(e) {
    let allCategorias = categorias;
    let theCategoria = Number(e.target.value);
    if (allCategorias.includes(theCategoria)) {
      allCategorias.splice(allCategorias.indexOf(theCategoria), 1);
      setCategorias(allCategorias);
    } else {
      allCategorias.push(theCategoria);
      setCategorias(allCategorias);
    }

    if (allCategorias.length > 0) {
      setCCategorias(2);
    }
  }

  function handleBiografia(e) {
    setBiografia(e.target.value);
  }

  function verificacionContrasena(e) {
    let laContrasena = e.target.value;

    if (laContrasena == "") {
      setCContrasena(1); // Inválido porque no ha digitado nada en las contraseñas
    } else {
      setCContrasena(2); // Válido porque ha digitado algo en las contraseñas
    }
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

  // Verificar si el nickname digitado ya existe o no
  function verificarNick(e) {
    let theNick = e.target.value;

    if (theNick == "") {
      setCNick(1);
      return false;
    }

    UsuarioService.verificarNick(theNick)
      .then(data => {
        if (data["data"]) {
          setCNick(3); // El nickname existe
        } else {
          setCNick(2); // El nickname no existe
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Verificar si se ha digitado un nombre
  function verificarNombre(e) {
    let elNombre = e.target.value;

    if (elNombre == "") {
      setCNombre(1);
    } else {
      setCNombre(2);
    }
  }

  // Verificar si se ha digitado algo en apellido
  function verificarApellido(e) {
    let elApellido = e.target.value;

    if (elApellido == "") {
      setCApellido(1);
    } else {
      setCApellido(2);
    }
  }

  function iniciarRegistro(event) {
    if (correo == "") {
      toast.error('Error. Verifica tu correo.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCCorreo(1);
      return false;
    }

    if (contrasena == "") {
      toast.error('Error. Verifica tu contraseña.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCContrasena(1);
      return false;
    }

    if (contrasena1 == "") {
      toast.error('Error. Verifica la confirmación de tu contraseña.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCContrasena1(1);
      return false;
    }

    if (contrasena != contrasena1) {
      toast.error('Error. Verifica ambas contraseñas.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCContrasena(3);
      setCContrasena1(3);
      return false;
    }

    if (nick == "") {
      toast.error('Error. Verifica tu nick.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCNick(1);
      return false;
    }

    if (nombre == "") {
      toast.error('Error. Verifica tu nombre.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCNombre(1);
      return false;
    }

    if (apellido == "") {
      toast.error('Error. Verifica tu apellido.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCApellido(1);
      return false;
    }

    if (categorias.length == 0) {
      toast.error('Error. Selecciona por lo menos una categoría,', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCCategorias(1);
      return false;
    }

    UsuarioService.singUp({
      correo: correo,
      contrasena: contrasena,
      nick: nick,
      nombre: nombre,
      apellido: apellido,
      biografia: biografia,
      categorias: categorias
    })
      .then(data => {
        alert('El usuario se ha registrado con éxito!');
        console.log(data);
      })
      .catch(err => {
        toast("Ocurrió un error al registrar el usuario");
        console.log(err);
      })

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
          <div className="form-text">
            No compartiremos tu correo con nadie.
          </div>
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label" htmlFor="contrasena">Contraseña*</label>
          <input className={"form-control " + (cContrasena == 1 || cContrasena == 3 ? "is-invalid" : cContrasena == 2 ? "is-valid" : "")} onChange={handleContrasena} onBlur={verificacionContrasena} type="password" name="contrasena" id="contrasena" placeholder="******" />
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
          <input className={"form-control " + (cContrasena1 == 1 || cContrasena1 == 3 ? "is-invalid" : cContrasena1 == 2 ? "is-valid" : "")} onChange={handleContrasena1} onBlur={verificacionContrasenaRepetida} type="password" name="vfContrasena" id="vfContrasena" placeholder="******" />
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
          <input className={"form-control " + (cNick == 1 || cNick == 3 ? "is-invalid" : cNick == 2 ? "is-valid" : "")} onChange={handleNick} onBlur={verificarNick} type="text" name="nickname" id="nickname" placeholder="peres123" />
          {
            cNick == 1 ?
              <div className="invalid-feedback d-block">
                Por favor ingresa un nickname.
              </div>
              :
              cNick == 3 ?
                <div className="invalid-feedback d-block">
                  El nickname ya existe.
                </div>
                :
                cNick == 2 ?
                  <div className="valid-feedback d-block">
                    ¡Se ve bien!
                  </div>
                  :
                  ""
          }
          <div className="form-text">
            Con este <i>nickname</i> iniciarás sesión.
          </div>
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label">Nombre/s*</label>
          <input className={"form-control " + (cNombre == 1 ? "is-invalid" : cNombre == 2 ? "is-valid" : "")} onChange={handleNombre} onBlur={verificarNombre} type="text" name="nombre" id="nombre" placeholder="Jose" />
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
          <input className={"form-control " + (cApellido == 1 ? "is-invalid" : cApellido == 2 ? "is-valid" : "")} onChange={handleApellido} onBlur={verificarApellido} type="text" name="apellido" id="apellido" placeholder="Perensejo" />
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

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="cocina" id="cocina" value="1" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="cocina">
              Cocina
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="arte" id="arte" value="2" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="arte">
              Arte
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="infantil" id="infantil" value="3" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="infantil">
              Infantil
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="videojuegos" id="videojuegos" value="4" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="videojuegos">
              Videojuegos
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="shorts" id="shorts" value="5" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="shorts">
              Shorts
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="viajes" id="viajes" value="6" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="viajes">
              Viajes
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="musicales" id="musicales" value="7" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="musicales">
              Músicales
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="recopilaciones" id="recopilaciones" value="8" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="recopilaciones">
              Recopilaciones
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="montajes" id="montajes" value="9" onChange={handleCategorias} />
            <label className="form-check-label" htmlFor="montajes">
              Montajes
            </label>
          </div>

          {
            cCategorias == 1 ?
              <div className="invalid-feedback d-block">
                Por favor ingresa por lo menos una categoría de tu especial interés.
              </div>
              :
              cCategorias == 2 ?
                <div className="valid-feedback d-block">
                  ¡Se ve bien!
                </div>
                :
                ""
          }

          <div className="form-text">
            Ya sea editor o usuario normal ¿qué tipo de videos disfrutas más ver/realizar?
          </div>
        </div>

        <div className="form-group mb-3 px-5">
          <label className="form-label">Biografía</label>
          <textarea className="form-control" onChange={handleBiografia} type="text" name="bio" id="bio" placeholder="Estudiante de ingeniería multimedia..." />
          <div className="form-text">
            Habla un poco acerca de ti para conectar con los demás usuarios (podrás ampliar esta información después).
          </div>
        </div>

        <div className="row g-0 w-100 p-0 py-4">
          <div className="col">
            <a className="btn btn-primary w-100" onClick={iniciarRegistro}>Registrarse</a>
          </div>

          <div className="col">
            <Link to="/login" className="btn btn-light w-100">Iniciar sesión</Link>
          </div>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
};

export default Registrarse;
