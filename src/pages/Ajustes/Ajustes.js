import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Ajustes.module.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';
import ProyectoService from '../../services/Proyecto.Service';

// FontAwesome
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ajustes = () => {
  const [cookies, setCookies] = useCookies(["nick"]);
  const navigate = useNavigate();
  const urlVideos = "http://localhost:3001/";

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

  // Modals
  const [idDeleteProject, setIdDeleteProject] = useState("");

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
    setFile(e.target.files[0]);
  }

  // Para mostrar/ocultar el modal de editar un proyecto
  function handleShowModalDeleteProject(_id) {
    setIdDeleteProject(_id);
  }

  // Para editar un proyecto.
  // Lo que se hace es que se actualiza 
  function editProject() {

  }

  // Para eliminar un proyecto
  function deleteProject() {
    let allTheProjects = [...theProjects];

    ProyectoService.deleteProjectNick(idDeleteProject)
      .then(res => {
        if (res.code == 200) {

          for (let i = 0; allTheProjects.length; i++) {
            let e = allTheProjects[i];
            if (e._id == idDeleteProject) {
              allTheProjects.splice(i, 1);
            }
          }

          setTheProjects(allTheProjects);
          showToastSuccess("Proyecto eliminado con éxito.");

        } else {
          showToastError("No se logró eliminar el proyecto.");
        }
        
        // Se oculta nuevamente el modal para eliminar el proyecto
        setIdDeleteProject("");
      })
      .catch(err => {
        // Se muestra un mensaje de error al intentar eliminar el proyecto
        showToastError("Ocurrió un error al intentar eliminar el proyecto");
      })
  }

  function addProject(e) {
    e.preventDefault();

    let data = {
      "nick": nickname,
      "titulo": title,
      "descripcion": description,
      "video": file
    };

    ProyectoService.postProjectNick(data)
      .then(res => {
        if (res.code == 200) {
          let allProjects = [...theProjects];
          allProjects.push(res.data);
          setTheProjects(allProjects);
          showToastSuccess("¡Se agrego el proyecto con éxito!");
        } else {
          // Mensaje de error ya que no se pudo agregar el 
          // proyecto en la base de datos o servidor
          showToastError("No se logró agregar el video en la base de datos");
        }

      })
      .catch(err => {
        showToastError("Ocurrió un error al intentar agregar un nuevo proyecto");        
        // Verificar si se colocará el error
      })
  }

  // Para los toasts
  // Mostrar un error
  function showToastError(message) {
    toast.error(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  // Mostrar un éxito
  function showToastSuccess(message) {
    toast.success(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
          });

        await ProyectoService.getProjectsNick(theNick)
          .then(res => {
            setTheProjects(res.data);
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
    <>

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
                <input className="form-control" type="file" name="file" id="file" onChange={handleFile} />
              </div>

              <div className="form-group mb-3">
                <button className="btn btn-primary" onClick={addProject}>Agregar proyecto</button>
              </div>
            </form>

            {
              theProjects.length > 0 ?
                theProjects.map((i, e) => {
                  return (
                    <div className="mb-3" key={"videos" + e}>
                      <div className="container-fluid row g-0 m-0 p-0 mb-3">
                        <div className="col-10">
                          <h5>{i["titulo"]}</h5>
                          <p className="m-0 pe-5">
                            {i["descripcion"]}
                          </p>
                        </div>
                        <div className="col-2 row m-0 p-0 g-0">
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className="btn btn-primary">
                              <FontAwesomeIcon icon={faPencil} />
                            </button>
                          </div>
                          <div className="col d-flex justify-content-end align-items-center">
                            <button className="btn btn-danger" onClick={() => handleShowModalDeleteProject(i["_id"])}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <video className="img-fluid" controls>
                        <source src={urlVideos + `${nickname}/` + i["nombreVideo"]} type="video/mp4"></source>
                      </video>
                    </div>
                  )
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

      {/* Modal para confirmar la eliminación de un proyecto */}
      <div className={"modal fade " + (idDeleteProject ? "show d-block   " + styles.ModalBg : "")} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              ¿Seguro que desea eliminar el proyecto de su perfil?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => handleShowModalDeleteProject("")} data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={deleteProject}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>

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
    </>
  )
};

Ajustes.propTypes = {};

Ajustes.defaultProps = {};

export default Ajustes;
