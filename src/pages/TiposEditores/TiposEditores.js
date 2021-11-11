import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TiposEditores.module.css';
import Menu from '../../components/Menu/Menu';
import MenuNav from '../../components/MenuNav/MenuNav';
import Footer from '../../components/Footer/Footer';

const TiposEditores = () => {

    const location = useLocation();

    return(
  <>
  <Menu nick={location.state.nick}></Menu>
  <MenuNav nick={location.state.nick}></MenuNav>

  {/* <!-- Section donde se mostrarán las categorías de los tipos de editores --> */}
    <section className="w-100 ps-3 pb-5 m-0">

        {/* <!-- Tiutlo de Tipos de editores --> */}
        <h2 className="w-100 text-center py-5">
            Tipos de Editores
        </h2>

        {/* <!-- Contenedor de tipos de editores --> */}
        <div className="row contenedor-tipos-editores w-100 no-gutters gy-5 px-5 justify-content-md-center m-0">
            
            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Cocina</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Arte</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Infantil</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Escenario</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Videojuegos</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Shorts</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Viajes</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Tráilers</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Musicales</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-25 d-flex justify-content-center align-items-center">
                    <img className="w-50" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-75 d-flex justify-content-center align-items-center m-0 p-0">Recopilaciones</h2>
            </a>

            <a className="d-flex col-sm-4 btn btn-light no-gutters p-0 justify-content-center align-items-center" href="">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img className="w-25" src="./imgs/Archivo.png" alt="Imagen de archivo" />
                </div>
                <h2 className="w-50 d-flex justify-content-start align-items-center m-0 p-0">Montajes</h2>
            </a>
        </div>
    </section>

  <Footer nick={location.state.nick}></Footer>
  </>
)};

export default TiposEditores;
