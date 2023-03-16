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
import OpinionService from '../../services/Opinion.Service';

// FontAwesome
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ajustes = () => {
  const [cookies, setCookies] = useCookies(["nick"]);
  const navigate = useNavigate();
  const urlVideos = "http://localhost:3001/";

  // Datos originales del editor
  const [orgName, setOrgName] = useState("");
  const [orgLastname, setOrgLastname] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgPassword, setOrgPassword] = useState("");
  const [orgNickname, setOrgNickname] = useState("");
  const [orgCategories, setOrgCategories] = useState([]);
  const [orgBiography, setOrgBiography] = useState("");

  // Datos del editor que pueden cambiar
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [categories, setCategories] = useState([]);
  const [biography, setBiography] = useState("");
  const [theProjects, setTheProjects] = useState([]);
  const [theOpinions, setTheOpinions] = useState([]);

  // Para un único proyecto
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  // Para verificar si hay datos cambiados
  /*
    hasChanged[0] -> email
    hasChanged[1] -> password
    hasChanged[2] -> name
    hasChanged[3] -> lastname
    hasChanged[4] -> nick
    hasChanged[5] -> categories
    hasChanged[6] -> biography
  */
  const [hasChanged, setHasChanged] = useState([0, 0, 0, 0, 0, 0, 0]);

  // Para iterar sobre campo original y campo modificado
  const [fieldsValues, setFieldsValues] = useState([["El correo", "", ""],
    ["La contraseña", "", ""],
    ["El nombre", "", ""],
    ["El apellido", "", ""],
    ["El nick", "", ""],
    [...orgCategories, ...categories],
    ["La biografía", "", ""]]);

  // Modals
  // Modal para eliminar proyecto
  const [idDeleteProject, setIdDeleteProject] = useState("");
  // Modal para actualizar datos básicos del usuario
  const [modalUpdateData, setModalUpdateData] = useState(false);

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

  function showToastInfo(message) {
    toast.info(`${message}`, {
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

  // Handles
  function handleEmail(e) {
    let theEmail = e.target.value;
    let theChanges = [...hasChanged];

    if (theEmail != orgEmail) theChanges[0] = 1;
    else theChanges[0] = 0;

    setHasChanged(theChanges);
    setEmail(theEmail);
  }

  function handlePassword(e) {
    let thePassword = e.target.value;
    let theChanges = [...hasChanged];

    if (thePassword != orgPassword) theChanges[1] = 1;
    else theChanges[1] = 0;

    setHasChanged(theChanges);
    setPassword(thePassword);
  }

  // Para mostrar la contraseña
  function toggleShowPassword() {
    let inputPassword = document.getElementById("password");
    inputPassword.type = inputPassword.type == "password" ? "text" : "password";
  }

  function handleName(e) {
    let theName = e.target.value;
    let theChanges = [...hasChanged];

    if (theName != orgName) theChanges[2] = 1;
    else theChanges[2] = 0;

    setHasChanged(theChanges);
    setName(theName);
  }

  function handleLastname(e) {
    let theLastname = e.target.value;
    let theChanges = [...hasChanged];

    if (theLastname != orgLastname) theChanges[3] = 1;
    else theChanges[3] = 0;

    setHasChanged(theChanges);
    setLastname(theLastname);
  }

  function handleNickname(e) {
    let theNickname = e.target.value;
    let theChanges = [...hasChanged];

    if (theNickname != orgNickname) theChanges[4] = 1;
    else theChanges[4] = 0;

    setHasChanged(theChanges);
    setNickname(theNickname);
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

    let theChanges = [...hasChanged];

    if (JSON.stringify(theCategories) != JSON.stringify(orgCategories)) theChanges[5] = 1;
    else theChanges[5] = 0;

    setHasChanged(theChanges);
    setCategories(theCategories);
  }

  function handleBiography(e) {
    let theBiography = e.target.value;
    let theChanges = [...hasChanged];

    if (theBiography != orgBiography) theChanges[6] = 1;
    else theChanges[6] = 0;

    setHasChanged(theChanges);
    setBiography(theBiography);
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

  async function toggleModalUpdateData(visibility) {
    // Primero se verifica si lo que se desea hacer
    // es mostrar el modal o
    // ocultar el modal.
    /*
      visibility -> true: se quiere mostrar el modal
      visibility -> false: se quiere ocultar el modal
    */
    if (!visibility) {
      setModalUpdateData(false);
      return;
    }

    // Luego se verifica que todos los campos estén completados.
    // En caso contrario, se genera un mensaje indicando el error.
    if (email == "" ||
      password == "" ||
      name == "" ||
      lastname == "" ||
      nickname == "" ||
      categories.length == 0 ||
      biography == "") {
      showToastInfo("Por favor completa todos los campos.");
      return;
    }

    // Se verifica que el email cambiado no exista
    if (email != orgEmail) {
      let emailExists = await UsuarioService.verifyEmail(email);

      if (emailExists["data"]) {
        showToastInfo("El correo ingresado ya existe.");
        return;
      }
    }

    // Se verifica que el nickname cambiado no exista
    if (nickname != orgNickname) {
      let nicknameExists = await UsuarioService.verificarNick(nickname);
      if (nicknameExists["data"]) {
        showToastInfo("El nickname ingresado ya existe.");
        return;
      }
    }

    let allFields = [["El correo", orgEmail, email],
      ["La contraseña", orgPassword, password],
      ["El nombre", orgName, name],
      ["El apellido", orgLastname, lastname],
      ["El nick", orgNickname, nickname],
      [orgCategories, categories],
      ["La biografía", orgBiography, biography]
    ];

    setFieldsValues(allFields);

    // Si ha pasado todas las condiciones anteriores,
    // entonces se puede proceder a realizar
    // la actualización de datos del usuario.
    setModalUpdateData(true);
  }

  // Para actualizar los datos básicos
  async function updateData() {
    // Si la contraseña editada es diferente de la contraseña original,
    // se debe solicitar una confirmación de contraseña
    // para que la actualización se haga correctamente.
    if (password != orgPassword) {

    }

    let theData = {
      "nick": orgNickname,
      "correo": email,
      "contrasena": password,
      "nombre": name,
      "apellido": lastname,
      "newNick": nickname,
      "categorias": categories,
      "biografia": biography
    };

    try {
      let response = await UsuarioService.updateData(theData);

      /*
        Posible códigos de respuesta:
        code == 200 -> ¡Los datos se han actualizado con éxito!
        code == 300 -> Ocurrió un error, por favor intenta nuevamente.
        code == 500 -> Ocurrió un error en el servidor al intentar actualizar los datos.
      */
      if (response["code"] == 200) showToastSuccess("¡Los datos han sido actualizados con éxito!");
      else if (response["code"] == 300) showToastError("Ocurrió un error, por favor intenta nuevamente.");
      else showToastError("Ocurrió un error en el servidor al intentar actualizar los datos.");

    } catch (updateDataError) {
      console.log({ updateDataError });
      showToastError("Ocurrió un error mientras se intentó actualizar los datos.");
    }
  }

  // Para cancelar la actualización de datos
  // y volver a colocar todos los campos como estaban
  function cancelUpdateData() {
    setEmail(orgEmail);
    setPassword(orgPassword);
    setName(orgName);
    setLastname(orgLastname);
    setNickname(orgNickname);
    setCategories(...orgCategories);
    setBiography(orgBiography);
    setHasChanged([0, 0, 0, 0, 0, 0, 0]);
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

  useEffect(() => {
    if (cookies.hasOwnProperty("nick")) {
      let theNick = cookies["nick"];
      setOrgNickname(theNick);
      setNickname(theNick);

      async function getAllData() {
        await UsuarioService.getAllData(theNick)
          .then(res => {
            let theEmail = res["correo"];
            setOrgEmail(theEmail);
            setEmail(theEmail);

            let thePassword = res["contrasena"];
            setOrgPassword(thePassword);
            setPassword(thePassword);

            let theName = res["nombre"];
            setOrgName(theName);
            setName(theName);

            let theLastname = res["apellido"];
            setOrgLastname(theLastname);
            setLastname(theLastname);

            let theCategories = res["categorias"];
            setOrgCategories(theCategories);
            setCategories(theCategories);

            let theBiography = res["biografia"];
            setOrgBiography(theBiography);
            setBiography(theBiography);
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


        await OpinionService.getOpinionsNick(theNick)
          .then(res => {
            console.log({ res });
            if (res["code"] == 500) {
              showToastError(res["message"]);
            } else {
              setTheOpinions(res.data);
            }
          })
          .catch(err => {
            console.log("err opinions");
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

          <div className="container px-5">
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

                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" name="showPassword" id="showPassword" onChange={toggleShowPassword} />
                  <label className="form-check-label" htmlFor="showPassword">Mostrar contraseña</label>
                </div>
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
                  <label className="form-check-label" htmlFor="arte">Arte</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="3" id="infantil" checked={categories.includes('3')} onChange={handleCategories}></input>
                  <label className="form-check-label" htmlFor="infantil">Infantil</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="4" id="videojuegos" checked={categories.includes('4')} onChange={handleCategories}></input>
                  <label className="form-check-label" htmlFor="videojuegos">Videojuegos</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="5" id="shorts" checked={categories.includes('5')} onChange={handleCategories}></input>
                  <label className="form-check-label" htmlFor="shorts">Shorts</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="6" id="viajes" checked={categories.includes('6')} onChange={handleCategories}></input>
                  <label className="form-check-label" htmlFor="viajes">Viajes</label>
                </div>
              </div>

              <div className="form-group my-3">
                <label className="form-label" htmlFor="biografia">Biografía</label>
                <textarea className="form-control" name="biografia" id="biografia" rows={5} value={biography} onChange={handleBiography}></textarea>
              </div>
            </form>

            <div className="sticky-bottom bg-light w-100 text-start py-4">
              <button className="btn btn-primary me-2"
                disabled={hasChanged.includes(1) ? false : true}
                onClick={() => toggleModalUpdateData(true)}>
                Actualizar datos
              </button>
              <button className="btn btn-light"
                disabled={hasChanged.includes(1) ? false : true}
                onClick={cancelUpdateData}>
                Cancelar
              </button>
            </div>

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
                <textarea className="form-control" id="description" name="description" value={description} type="text" onChange={handleDescription} maxLength="150"></textarea>
                <div className="form-text">
                  Tu descripción puede tener una longitud máxima de 150 caracteres.
                </div>
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

            {
              theOpinions.length > 0 ?
                theOpinions.map((e, i) => {
                  <div key={"opinion" + nickname + i}>
                    <div>{e["nickTo"]}</div>
                    <div>{e["nickFrom"] != null ? e["nickFrom"] : ""}</div>
                    <div>{e["estrellas"]}</div>
                    <div>{e["descripcion"]}</div>
                  </div>
                })
                :
                <p>Aún no te han compartido alguna opinión.</p>
            }
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

      {/* Modal para confirmar la actualización de los datos */}
      <div className={"modal fade " + (modalUpdateData ? "show d-block   " + styles.ModalBg : "")} id="modalUpdateData" tabIndex="-1" aria-labelledby="modalUpdateData" aria-hidden="true" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar actualización de datos</h5>
            </div>
            <div className="modal-body">
              Has modificado:
              <ul>
                {
                  hasChanged.map((e, i) => {
                    // i != 1 contempla si la contraseña se ha modificado.
                    // Si la contraseña se ha modificado se solicitará una confirmación
                    // posterior.
                    // i != 5 contempla las categorías.
                    // Cuando se modifical las categorías solo se establece que se han cambiado.
                    if (e == 1 && i != 1 && i != 5) {
                      let field = fieldsValues[i][0];
                      let original = fieldsValues[i][1];
                      let modified = fieldsValues[i][2];

                      return (
                        <li key={"modifiedItem" + i}>
                          {field} de
                          {' '}<u className="text-break text-wrap">{original}</u>{' '}
                          a
                          {' '}<u className="text-break text-wrap">{modified}.</u>
                        </li>
                      )
                    } else if (e == 1 && i == 5) {
                      return (
                        <li key={"modifiedItem" + i}>Las <u className="text-break text-wrap">categorias</u>.</li>
                      )
                    }
                  })
                }
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => toggleModalUpdateData(false)} data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={updateData}>Actualizar</button>
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
