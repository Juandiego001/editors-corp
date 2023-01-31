import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BusquedaEditores.module.css';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';

const BusquedaEditores = () => {

  const [nickSearched, setNickSearched] = useState("");
  const [editorsFind, setEditorsFind] = useState([]);

  function handleNickSearched(e) {
    setNickSearched(e.target.value);
  }

  function searchEditor() {
    if (nickSearched == "") {
      toast.error('Por favor ingresa un nickname buscado.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      UsuarioService.searchEditors(nickSearched)
        .then(res => {
          if (res["code"] == 200) {
            toast.success('¡Se han encontrado editores con el nickname!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setEditorsFind(res["data"]);
          } else {

          }

        })
        .catch(err => {
          console.log("err");
          console.log(err);
        })
    }
  }

  return (
    <>
      <Helmet>
        <title>Búsqueda de editores | Editor's Corp</title>
      </Helmet>

      <div>
        <Menu />

        <div className="vh-100 position-relative">
          <div className={"mx-auto " + styles.ContainerSearchEditors}>
            <h1 className="display-1 text-center mb-3">Búsqueda de editores</h1>
            <div className="d-flex justify-content-center">
              <input className="form-control w-75" type="text" name="nickSearched" id="nickSearched" onChange={handleNickSearched} placeholder="Ingresa el nickname" />
              <button className="btn btn-primary d-inline ms-2" onClick={searchEditor}>Buscar</button>
            </div>
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
