import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Ajustes.module.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';
import ProyectoService from '../../services/Proyecto.Service';

const Ajustes = () => {
  const [cookies, setCookies] = useCookies(["nick"]);
  const navigate = useNavigate();

  // Datos del editor
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [categories, setCategories] = useState([]);
  const [biography, setBiography] = useState("");
  const [theProjects, setTheProjects] = useState([]);
  const [theOpinions, setTheOpinions] = useState([]);

  // Para un único proyecto
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  // Handles
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLastname(e) {
    setLastname(e.target.value);
  }

  function handleNickname(e) {
    setNickname(e.target.value);
  }


  // Revisar
  function handleCategories(e) {
    let theCategories = [...categories];
    let theCategory = e.target.value;
    if (theCategories.includes(theCategory)) {
      theCategories.splice(theCategories.indexOf(theCategory), 1);
    } else {
      theCategories.push(theCategory);
    }
    setCategories(theCategories);
  }

  function handleBiography(e) {
    setBiography(e.target.value);
  }

  // Para los proyectos
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleFile(e) {
    console.log(e.target);

    setFile(e.target.value);
  }


  useEffect(() => {
    if (cookies.hasOwnProperty("nick")) {
      let theNick = cookies["nick"];
      setNickname(theNick);

      async function getAllData() {
        await UsuarioService.getAllData(theNick)
          .then(res => {
            setEmail(res["correo"]);
            setPassword(res["contrasena"]);
            setName(res["nombre"]);
            setLastname(res["apellido"]);
            setCategories(res["categorias"]);
            setBiography(res["biografia"]);
          })
          .catch(err => {
            console.log("err");
            console.log(err);
          })

        await ProyectoService.getProjectsNick(theNick)
          .then(res => {
            setTheProjects(res);
          })
          .catch(err => {
            console.log("err projects");
            console.log(err);
          })

      }

      getAllData();
    } else {
      // Mensaje indicando que debe iniciar sesión anteriormente
      navigate("/");
    }
  }, [])

  return (
    <div className="container-fluid p-0">
      <Menu />

      <div className="container-fluid m-0 p-0">
        <h1 className="text-center my-5">
          Ajustes
        </h1>

        <div className="px-5">
          <h4>
            Datos personales
          </h4>

          <form>
            <div className="form-group my-3">
              <label className="form-label" htmlFor="email">Correo</label>
              <input className="form-control" name="email" id="email" type="email" value={email} onChange={handleEmail} />
            </div>

            <div className="form-group my-3">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <input className="form-control" name="password" id="password" type="password" value={password} onChange={handlePassword} />
            </div>

            <div className="form-group my-3">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input className="form-control" name="name" id="name" type="text" value={name} onChange={handleName} />
            </div>

            <div className="form-group my-3">
              <label className="form-label" htmlFor="lastname">Apellido</label>
              <input className="form-control" name="lastname" id="lastname" type="text" value={lastname} onChange={handleLastname} />
            </div>

            <div className="form-group my-3">
              <label className="form-label" htmlFor="username">Nombre de usuario</label>
              <input className="form-control" name="username" id="username" type="text" value={nickname} onChange={handleNickname} />
            </div>

            <div className="form-group my-3">
              <label className="form-label">Categorías</label>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1" id="cocina" checked={categories.includes('1')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Cocina</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2" id="arte" checked={categories.includes('2')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Arte</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3" id="infantil" checked={categories.includes('3')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Infantil</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4" id="videojuegos" checked={categories.includes('4')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Videojuegos</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5" id="shorts" checked={categories.includes('5')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Shorts</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6" id="Viajes" checked={categories.includes('6')} onChange={handleCategories}></input>
                <label className="form-check-label" htmlFor="cocina">Viajes</label>
              </div>
            </div>

            <div className="form-group my-3">
              <label className="form-label" htmlFor="biografia">Biografía</label>
              <textarea className="form-control" name="biografia" id="biografia" rows={5} value={biography} onChange={handleBiography}></textarea>
            </div>
          </form>

          <h4 className="mt-5">
            Proyectos
          </h4>

          <form>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="title">Título del video</label>
              <input className="form-control" id="titulo" name="titulo" value={title} type="text" onChange={handleTitle} />
            </div>

            <div className="form-group mb-3">
              <label className="form-label" htmlFor="description">Descripción del video</label>
              <input className="form-control" id="description" name="description" value={description} type="text" onChange={handleDescription} />
            </div>

            <div className="form-group mb-3">
              <label className="form-label" htmlFor="file">Agrega tu archivo de video aquí</label>
              <input className="form-control" type="file" name="file" id="file" onChange={handleFile}/>
            </div>
          </form>

          {
            theProjects.length > 0 ?
              theProjects.map((i, e) => {
                <div>
                  <h5>{i["titulo"]}</h5>
                  <p>{i["descripcion"]}</p>
                  <video src={i["urlVideo"]}></video>
                </div>
              })
              :
              <p>Aún no tienes ningún proyecto en tu perfil.</p>
          }


          <h4 className="mt-5">
            Opiniones
          </h4>

          <button className="btn btn-primary">Actualizar</button>
          <button className="btn btn-light">Cancelar</button>
        </div>
      </div>

      <Footer />
    </div>
  )
};

Ajustes.propTypes = {};

Ajustes.defaultProps = {};

export default Ajustes;
