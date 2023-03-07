import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BusquedaEditores.module.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';

const BusquedaEditores = () => {
  const navigate = useNavigate();

  const [nickSearched, setNickSearched] = useState("");
  const [editorsFind, setEditorsFind] = useState([]);

  function handleNickSearched(e) {
    setNickSearched(e.target.value);
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

  function searchEditor() {
    if (nickSearched == "") {
      showToastError('Por favor ingresa un nickname buscado.');
    } else {
      UsuarioService.searchEditors(nickSearched)
        .then(res => {
          if (res["code"] == 200) {
            showToastSuccess('¡Se han encontrado editores con el nickname!');
            setEditorsFind(res["data"]);
          } else {
            showToastInfo('No se han logrado encontrar editores con el nickname.');
            setEditorsFind([]);
          }
        })
        .catch(err => {
          showToastError('Ocurrió un error mientras se intentaba buscar el/los usuarios.');
          console.log(err);
        })
    }
  }

  function seeProfile(profile) {
    toast.dismiss();
    navigate(`/perfil/${profile}`);
  }

  useEffect(() => {
    // Cuando cargue la página,
    // ubicar el usuario en la parte superior
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Búsqueda de editores | Editor's Corp</title>
      </Helmet>

      <div>
        <Menu />

        <div className="vh-100 position-relative">
          <div className={"container-fluid m-0 p-0  " + styles.ContainerSearchEditors + " " + (editorsFind.length > 0 ? styles.GoUp : "")}> {/* Para subir el contenedor en caso de que se hayan encontrado nicknames */}
            <h1 className="display-1 text-center mb-3">Búsqueda de editores</h1>
            <div className="d-flex justify-content-center">
              <input className="form-control w-75" type="text" name="nickSearched" id="nickSearched" onChange={handleNickSearched} placeholder="Ingresa el nickname" />
              <button className="btn btn-primary d-inline ms-2" onClick={searchEditor}>Buscar</button>
            </div>

            {/* Grilla para mostrar los usuarios encontrados */}
            {
              editorsFind.length > 0 ?
                <div className={"row m-0 p-0 mt-5 px-4"}>
                  <div className="display-6 w-100 text-center m-0 p-0 pb-3">
                    Resultados de búsqueda
                  </div>

                  {
                    [...editorsFind].map((e, i) => {
                      return (
                        <div className="row" key={"searchEditorContainer" + i}>
                          <div className="col-3 border border-light d-flex justify-content-center align-items-center py-3">
                            <p className="h6 text-center m-0 p-0">
                              {editorsFind[i]["nick"]}
                            </p>
                          </div>

                          <div className={"col-3 text-center border border-light d-flex justify-content-center align-items-center text-light " + styles.BgPrimary} onClick={() => seeProfile(editorsFind[i]["nick"])}>
                            Ver perfil
                          </div>

                          <div className={"col-3 text-center border border-light d-flex justify-content-center align-items-center text-light " + styles.BgSuccess}>
                            Enviar mensaje
                          </div>

                          <div className={"col-3 text-center border border-light d-flex justify-content-center align-items-center text-light " + styles.BgCyan900}>
                            Agregar amigo
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                :
                ""
            }
          </div>
        </div>

        <Footer />
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

BusquedaEditores.propTypes = {};

BusquedaEditores.defaultProps = {};

export default BusquedaEditores;
