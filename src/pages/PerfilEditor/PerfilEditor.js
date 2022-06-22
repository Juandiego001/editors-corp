import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PerfilEditor.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import TratoService from '../../services/Trato.Service';

const PerfilEditor = () => {

    const location = useLocation();
    let tratosActivos;
    let hacia = '';

    function navegarMenu() {        
    }

    function setTratosActivos() {
        const losTratos = TratoService.obtenerTratos();
        losTratos
            .then(data => {
                alert('Se obtuvieron los tratos actuales con éxito!');
                console.log(data);
                tratosActivos = data;
            })
            .catch(err => {
                alert('Ocurrió un error al obtener los tratos activos');
                console.log(err);
            })
    }

    return (
        <>
        <Menu nick={location.state.nick}></Menu>
        
    
        {/* <!-- Perfil del editor --> */}
        <section className="w-100 py-4">
            {/* <!-- Foto de perfil del editor --> */}
            <div className="row p-0 w-100 d-flex justify-content-center align-items-center m-0 no-gutters">
                <h1 className="m-0 py-1 text-center">
                    <i className="fa fa-user bg-success text-light p-5 rounded-circle"></i>
                </h1>
            </div>
    
            {/* <!-- Agregar amigo - Nombre editor - Contactar - Mostrarse con apodo --> */}
            <div className="row w-100 m-0 px-2 no-gutters">
                <button className="col-3 btn btn-success">
                    <i className="fa fa-user-plus"></i>
                    Agregar amigo
                </button>
                <p className="col-6 text-center">
                    Santiago Henao<br/>
                    (Flioraquv)
                </p>
                <button onClick={() => {
                        hacia = 'trato';
                        navegarMenu();
                    }
                } className="col-1 btn btn-success">
                    <i className="fa fa-envelope-square"></i>
                    Contactar
                </button>
                <button className="col-2 btn btn-light">
                    Mostrarse con apodo
                </button>
            </div>
    
            {/* <!-- Opciones: 'Opiniones' y 'Proyectos personales' --> */}
            <div className="row w-100 no-gutters px-2 pt-2 pb-0">
                <button className="col btn btn-outline-success" data-bs-toggle="collapse" data-bs-target="#opiniones" aria-controls="opiniones" aria-expanded="false" aria-label="Control opiniones">
                    <i className="fa fa-users"></i>
                    <span>&emsp;Opiniones</span>
                </button>
                <button className="col btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#proyectos" aria-controls="proyectos" aria-expanded="false" aria-label="Control proyectos">
                    <i className=""></i>
                    <span>Proyectos personales</span>
                </button>
            </div><br/>
    
            {/* <!-- Div de las opiniones --> */}
            <div id="opiniones" className="collapse m-0">
                {/* <!-- Opinión + Video #1 --> */}
                <div className="row w-100 no-gutters m-0 p-0">
                    {/* <!-- Opinión --> */}
                    <div className="col bg-success m-0 p-0">
                        {/* <!-- Estrellas --> */}
                        <div className="row h-25 justify-content-center align-items-center no-gutters text-light m-0 p-0">
                            <h3 className="m-0 p-0 text-center">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </h3>
                        </div>
    
                        {/* <!-- Comentario --> */}
                        <div className="row h-50 justify-content-center align-items-center no-gutters p-5 text-light">
                            La edición fue agradable, la interacción con el editor fue amena, 
                            se tardó poco pero 100% recomendado.
                        </div>
    
                        {/* <!-- Acerca del cliente --> */}
                        <div className="row h-25 justify-content-center align-items-center no-gutters p-2">
                            <span className="col text-light p-0 m-0 text-end me-4">&emsp;Juan Diego Cobo</span>
                            <div className="col p-0 m-0">
                                <button className="w-25 btn btn-outline-light rounded-circle p-0 text-center">
                                        <i className="fa fa-user"></i>
                                </button>
                            </div>
                        </div>
    
                    </div>
    
                    {/* <!-- Video --> */}
                    <div className="col d-flex justify-content-center align-items-center bg-success m-0 p-0">
                        <video className="w-75" controls>
                            <source src="videos/video_ejemplo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div><br/>
    
            {/* <!-- Div de los proyectos personales --> */}
            <div id="proyectos" className="collapse m-0 p-0">
                {/* <!-- Información video + video #1 --> */}
                <div className="row w-100 px-2 no-gutters">
                    {/* <!-- Información acerca del video --> */}
                    <div className="col bg-primary">
                        {/* <!-- Titulo --> */}
                        <h2 className="row w-100 justify-content-center align-items-center px-0 py-2 m-0 no-gutters text-light">
                            Titulo del video
                        </h2>
    
                        {/* <!-- Descripción --> */}
                        <h3 className="row px-0 py-2 m-0 justify-content-center align-items-center no-gutters text-light">
                            Descripción
                        </h3>
                        <p className="row text-justify px-5 py-2 m-0 justify-content-center align-items-center text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Esse aut vitae debitis mollitia qui praesentium ipsum laborum unde eos, provident minima quod
                             asperiores animi eveniet reprehenderit, ducimus quae inventore libero.
                        </p>
                    </div>
    
                   {/* <!-- Video --> */}
                   <div className="col d-flex justify-content-center align-items-center bg-primary m-0 p-0">
                        <video className="w-75" controls>
                            <source src="videos/video_ejemplo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div><br/>
    
            {/* <!-- Datos del editor --> */}
            <div className="bg-info w-100 pb-3 mb-4">
                <h2 className="w-100 py-2 text-light text-center">Datos del editor</h2>
                <p className="bg-light p-3 text-justify w-75 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, exercitationem sit ut modi error veniam unde ipsam facilis necessitatibus odit tempora quis id animi. Quod recusandae eum reiciendis tenetur deleniti!
                    Consectetur eius aut ducimus doloribus fugiat saepe enim eaque ipsa porro explicabo iure harum eveniet cum dolores maxime ut, dolorem laudantium aliquid at repellendus minima sapiente optio nobis. Suscipit, laborum?
                    Fugiat culpa alias accusamus? Eligendi consequatur esse sed, adipisci alias nobis at, ut, nostrum iusto fuga minus aperiam qui quos omnis voluptatum! Ullam, rerum. Sequi est debitis nulla doloremque voluptatum!
                    Dolores omnis, illum odit asperiores temporibus amet perspiciatis sequi cum praesentium inventore. Quae, dolorem. Saepe nemo earum, molestiae consectetur officia quidem, modi atque facere odio explicabo commodi odit debitis? Laudantium.
                    Amet quisquam quae ipsa voluptatibus? Et neque unde eius deleniti minus expedita nostrum ratione pariatur eos dolor quibusdam tempora quidem, necessitatibus accusantium exercitationem velit error ab rem dicta magnam consequuntur.
                </p>
            </div>

            {/* Div de los tratos */}
            {/* <div className="bg-info w-100 my-4 py-2">
            <h2 className="w-100 py-2 text-light text-center">Proyectos activos</h2>
                <div className="w-100 ms-5 mt-4">
                    <p className="w-100">Cliente: Juan001</p>
                    <p className="w-100">GRAN PROYECTO</p>
                    <p className="w-100">PRECIO: 20000</p>
                    <p className="w-100">Descripción: Talcual</p>

                    <input className="" type="file" name="archivo1" id="archivo1" />
                    <input className="" type="submit" name="terminarTrato1" id="terminarTrato1" value="Terminar trato" />
                </div>

                <div className="w-100 ms-5 mt-4">
                    <p className="w-100">Cliente: Juan001</p>
                    <p className="w-100">GRAN PROYECTO</p>
                    <p className="w-100">PRECIO: 20000</p>
                    <p className="w-100">Descripción: Talcual</p>

                    <input className="" type="file" name="archivo" id="archivo" />
                    <input className="" type="submit" name="terminarTrato2" id="terminarTrato2" value="Terminar trato" />
                </div>
            </div>
     */}
            <div></div>
        </section>
    
        <Footer nick={location.state.nick}></Footer>
      </>
    )};

export default PerfilEditor;
