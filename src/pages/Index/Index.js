import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Index.module.css';
import Menu from '../../components/Menu/Menu';
import MenuNav from '../../components/MenuNav/MenuNav';
import Footer from '../../components/Footer/Footer';

const Index = (props) => {
    
    const location = useLocation();

    return (
        <>
        <Menu nick={location.state.nick}></Menu>
        <MenuNav nick={location.state.nick}></MenuNav>
    
        {/* <!-- Lugar donde se publicarán noticias o videos que algunos editores estén dispuestos a publicar --> */}
        <section className="row w-100 py-4 m-0 justify-content-center bg-light no-gutters">
    
            {/* <!-- Ejemplo #1 de publicacion --> */}
            <div className="row w-75 bg-primary no-gutters p-0 m-0">
                <div className="row w-100 no-gutters">
                    <div className="col text-light p-0 align-items-center d-flex">
                        <button className="btn btn-primary fa fa-user rounded-sm">
                            <span className="ms-3" style={{fontFamily: 'Calibri'}}>Admin</span>
                        </button>
                    </div>
                </div>
    
                <div className="row no-gutters p-0 m-0 py-0">
                    <img className="col w-100 p-0" src="imgs/example.jpg" alt="Imagen de ejemplo publicación"/>
                </div>
    
                <div className="row w-100 no-gutters p-0 m-0">
    
                    <div className="col bg-primary p-0">
                        <button className="btn btn-primary w-100 h-100">
                            <i className="fa fa-thumbs-up"></i>
                            <span>&emsp;Me gusta</span>    
                        </button>
                    </div>
    
                    <div className="col bg-info p-0">
                        <button className="btn btn-info w-100 h-100">
                            <i className="fa fa-info-circle text-light"></i>
                            <span className="text-light">&emsp;Descripción</span>
                        </button>
                    </div>
    
                    <div className="col bg-success p-0">
                        <button className="btn btn-success w-100">
                            <i className="fa fa-comment"></i>
                            <span>&emsp;Comentarios</span>
                        </button>
                    </div>
    
                </div>
            </div>
    
            <div className="row w-100">
                
            </div>
        </section>
    
        <Footer nick={location.state.nick}></Footer>
        </>
    )};

export default Index;
