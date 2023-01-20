import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Perfil.module.css';
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';
import TratoService from '../../services/Trato.Service';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Videos

const Perfil = () => {
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [biography, setBiography] = useState("");
    const [cookies, setCookies] = useCookies(["nick"]);
    const [mostrarOpiniones, setMostrarOpiniones] = useState(false);
    const [mostrarProyectos, setMostrarProyectos] = useState(false);

    function handleMostrarOpiniones() {
        setMostrarOpiniones(!mostrarOpiniones);
    }

    function handleMostrarProyectos() {
        setMostrarProyectos(!mostrarProyectos);
    }

    useEffect(() => {
        if (cookies.hasOwnProperty("nick")) {
            let theNick = cookies["nick"];
            setNick(theNick);

            UsuarioService.getData(theNick)
                .then(data => {
                    setName(data.data.nombre + " " + data.data.apellido);
                    setBiography(data.data.biografia);
                })
                .catch(err => {
                    alert("Ocurrió un error al intentar obtener los datos del perfil del usuario.");
                    console.log(err);
                })
        } else {
            alert("No se encontró el nick");
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>{name} | Perfil | Editor's Corp</title>
            </Helmet>

            <div className="container-fluid p-0 bg-light">
                <Menu></Menu>

                {/* <!-- Perfil del editor --> */}
                <div className="container-fluid p-0">
                    <div className="container-fluid mt-5">
                        <div className="container-fluid text-center">
                            <FontAwesomeIcon className="h1 m-0 p-0" icon={faUser} />
                        </div>
                        <h2 className="d-flex justify-content-center m-0">
                            {name}
                        </h2>
                    </div>

                    {/* <!-- Agregar amigo - Nombre editor - Contactar - Mostrarse con apodo --> */}
                    <div className="row justify-content-md-center w-100 my-3">
                        <div className="col text-center p-0">
                            <button className="btn btn-success w-75">
                                <i className="fa fa-user-plus me-2"></i>
                                Agregar amigo
                            </button>
                        </div>
                        <div className="col text-center p-0">
                            <button className="btn btn-primary w-75" >
                                <i className="fa fa-envelope-square"></i>
                                Contactar
                            </button>
                        </div>
                        <div className="col text-center p-0">
                            <button className="btn btn-light w-75">
                                Mostrarse con apodo
                            </button>
                        </div>
                    </div>

                    {/* <!-- Opciones: 'Opiniones' y 'Proyectos personales' --> */}
                    <div className="row w-100 m-0 px-2">
                        <div className="col p-0 text-center">
                            <button className="btn btn-outline-success w-100" onClick={handleMostrarOpiniones}>
                                Opiniones
                            </button>
                        </div>
                        <div className="col p-0 text-center">
                            <button className="btn btn-outline-primary w-100" onClick={handleMostrarProyectos}>
                                Proyectos personales
                            </button>
                        </div>
                    </div>

                    {/* <!-- Alert Opiniones --> */}
                    <div className={"alert alert-light p-0 mt-5 w-100 border-0 " + (mostrarOpiniones ? "d-block" : "d-none")}>
                        {/* <!-- Opinión + Video #1 --> */}
                        <div className="row bg-success p-0 m-0 align-items-center py-3">
                            {/* <!-- Opinión --> */}
                            <div className="col">
                                <div className="row">
                                    {/* <!-- Comentario --> */}
                                    <div className="col text-light text-end">
                                        La edición fue agradable, la interacción con el editor fue amena,
                                        se tardó poco pero 100% recomendado.
                                    </div>

                                    {/* <!-- Estrellas --> */}
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <h3 className="m-0 p-0 text-center">
                                            <FontAwesomeIcon className="text-light" icon={faStar} />
                                            <FontAwesomeIcon className="text-light" icon={faStar} />
                                            <FontAwesomeIcon className="text-light" icon={faStar} />
                                            <FontAwesomeIcon className="text-light" icon={faStar} />
                                            <FontAwesomeIcon className="text-light" icon={faStar} />
                                        </h3>
                                    </div>
                                </div>


                                {/* <!-- Acerca del cliente --> */}
                                <div className="container-fluid text-center mt-3">
                                    <button className="btn btn-success">
                                        <FontAwesomeIcon className="text-light me-3" icon={faUser} />
                                        Juan Diego Cobo
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Video --> */}
                            <div className="col d-flex justify-content-center align-items-center">
                                <video className="w-75" controls>
                                    <source src="/videos/video_ejemplo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Div de los proyectos personales --> */}
                    <div className={"alert p-0 m-0 mt-5 w-100 border-0 " + (mostrarProyectos ? "d-block" : "d-none")}>
                        {/* <!-- Información video + video #1 --> */}
                        <div className="row w-100 p-0 bg-primary py-3 m-0">
                            {/* <!-- Información acerca del video --> */}
                            <div className="col d-flex justify-content-center align-items-center">
                                {/* <!-- Titulo --> */}
                                <div className="row">
                                    <h2 className="text-light text-center">
                                        Titulo del video
                                    </h2>

                                    {/* <!-- Descripción --> */}
                                    <h3 className="text-light text-center">
                                        Descripción
                                    </h3>

                                    <p className="text-light text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Esse aut vitae debitis mollitia qui praesentium ipsum laborum unde eos, provident minima quod
                                        asperiores animi eveniet reprehenderit, ducimus quae inventore libero.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Video --> */}
                            <div className="col p-0 d-flex justify-content-center align-items-center">
                                <video className="w-75" controls>
                                    <source src="/videos/video_ejemplo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Datos del editor --> */}
                    <div className="container-fluid bg-light w-100 p-0 mt-5">
                        <h2 className="w-100 py-2 text-center">Datos del editor</h2>
                        <p className="bg-light p-3 text-justify w-75 mx-auto">
                            { biography }.
                        </p>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </>
    )
};

export default Perfil;
