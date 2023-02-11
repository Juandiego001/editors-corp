import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Perfil.module.css';
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import {
    Link,
    useLoaderData,
    useNavigate
} from "react-router-dom";

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Services
import UsuarioService from '../../services/Usuario.Service';
import TratoService from '../../services/Trato.Service';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';

// Videos

const Perfil = () => {
    // Cuando se busca un usuario,
    // se almacenará su nick en esta variable.
    const nickQuery = useLoaderData();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [biography, setBiography] = useState("");
    const [cookies, setCookies] = useCookies(["nick"]);
    const [mostrarOpiniones, setMostrarOpiniones] = useState(false);
    const [mostrarProyectos, setMostrarProyectos] = useState(false);

    // Para verificar que el usuario buscado existe
    const [userExists, setUserExists] = useState(true);

    // Agregar amigo y enviar mensaje
    const botonesSuperiores = [
        {
            "mensaje": "Agregar amigo",
            "icono": faUserPlus,
            "style": "h1 m-0 p-0 me-2 text-primary",
        },
        {
            "mensaje": "Enviar mensaje",
            "icono": faMessage,
            "style": "h1 m-0 p-0 me-2 text-primary",
        }
    ];

    const botonesInferiores = [
        {
            "mensaje": "Mostrar opiniones",
            "icono": faStar,
            "style": "h1 m-0 p-0 me-2 text-warning",
            "onclick": handleMostrarOpiniones
        },
        {
            "mensaje": "Mostrar proyectos",
            "icono": faBriefcase,
            "style": "h1 m-0 p-0 me-2 text-success",
            "onclick": handleMostrarProyectos
        },
        {
            "mensaje": "Ajustes",
            "icono": faScrewdriver,
            "style": "h1 m-0 p-0 me-2 text-dark",
        }
    ];

    function handleMostrarOpiniones() {
        setMostrarOpiniones(!mostrarOpiniones);
    }

    function handleMostrarProyectos() {
        setMostrarProyectos(!mostrarProyectos);
    }

    useEffect(() => {
        let sameNick = true;

        // Se compara el nick del usuario que ha iniciado
        // sesión con el nickd el usuario que se busca.
        // Si es el mismo, se trata de que está analizando
        // su propio perfil. De lo contrario,
        // está visualizando otro perfil de otro editor.
        if (cookies.hasOwnProperty("nick")) {
            let theNick = cookies["nick"];

            if (theNick != nickQuery) {
                sameNick = false;
            }

            setNick(sameNick ? theNick : nickQuery);

            async function searchUser() {
                let userData = await UsuarioService.getData(sameNick ? theNick : nickQuery);

                if (userData.code == 200) {
                    setName(userData.nombre + " " + userData.apellido);
                    setBiography(userData.biografia);
                } else {
                    setUserExists(false);
                }
            }

            searchUser();
            // Se podría agregar el catch ya que lo quitamos
            // por tener el await en el servicio


        } else {
            // Se podría agregar un mensaje para indicar al usuario que debe
            // iniciar sesión antes de poder buscar un editor
            navigate("/");
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>{name} | Perfil | Editor's Corp</title>
            </Helmet>

            <div className="container-fluid m-0 p-0 bg-light">
                <Menu></Menu>

                {
                    userExists ?
                        /* <!-- Perfil del editor --> */
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
                            <div className="my-4 row g-0">
                                {
                                    botonesSuperiores.map((i, e) => {
                                        return (
                                            <div className={"col-sm-6 m-0 p-0 my-2 " + styles.HoverCursorPointer}>
                                                <div className="h-100 m-0 p-0">
                                                    <div className="d-flex justify-content-center align-items-center m-0 p-0 text-center">
                                                        <FontAwesomeIcon className={i["style"]} icon={i["icono"]} />
                                                        {i["mensaje"]}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="my-4 row g-0">
                                {
                                    botonesInferiores.map((i, e) => {
                                        return (
                                            <div className={"col-sm-4 m-0 p-0 my-2 " + styles.HoverCursorPointer} onClick={i["onclick"]}>
                                                <div className={"h-100 p-0 m-0"}>
                                                    <div className="d-flex align-items-center justify-content-center m-0 p-0 text-center">
                                                        <FontAwesomeIcon className={i["style"]} icon={i["icono"]} />
                                                        <span className="d-flex ">{i["mensaje"]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

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
                                    {biography}.
                                </p>
                            </div>
                        </div>
                        :
                        <div className="p-5">
                            <h1>Lo sentimos.</h1>
                            <p>
                                El usuario de nick '<b>{nickQuery}</b>' no existe en nuestra base de datos.
                                Verifica su nickname y búscalo nuevamente.
                            </p>
                        </div>
                }

                <Footer></Footer>
            </div>
        </>
    )
};

export default Perfil;
