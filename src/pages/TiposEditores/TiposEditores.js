import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TiposEditores.module.css';
import { Link, useLocation } from 'react-router-dom';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons/faKitchenSet';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons/faPaintbrush';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons/faMasksTheater';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faFaceGrinSquintTears } from '@fortawesome/free-solid-svg-icons/faFaceGrinSquintTears';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';


const TiposEditores = () => {

    const location = useLocation();

    useEffect(() => {
        document.title = "Tipos de editores | Editor's Corp";
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="container-fluid p-0">
            <Menu></Menu>

            {/* <!-- Section donde se mostrarán las categorías de los tipos de editores --> */}
            <div className="container-fluid py-5">
        
                {/* <!-- Tiutlo de Tipos de editores --> */}
                <div className="container-fluid">
                    <h2 className="w-100 text-center py-5">
                        Tipos de Editores
                    </h2>
                </div>
        
                {/* <!-- Contenedor de tipos de editores --> */}
                <div className="row g-3 m-0 mx-5">
                    <Link to="#" className="btn btn-light col">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faKitchenSet} />
                            <span>Cocina</span>
                        </h3>
                    </Link>
        
                    <Link className="btn btn-light col" variant="light" href="#">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faPaintbrush} />
                            <span>Arte</span>
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faChild} />
                            Infantil
                        </h3>
                        </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                        <FontAwesomeIcon className="me-2" icon={faMasksTheater} />
                            Escenario
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faGamepad} />
                            Videojuegos
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faMobileScreen} />
                            Shorts
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faMountain} />
                            Viajes
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faCamera} />
                            Tráilers
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faMusic} />
                            Musicales
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faFaceGrinSquintTears} />
                            Recopilaciones
                        </h3>
                    </Link>
    
                    <Link className="btn btn-light col" variant="light" href="">
                        <h3 className="d-flex text-dark m-0 p-0 justify-content-center align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faRocket} />
                            Montajes
                        </h3>
                    </Link>
                </div>
            </div>
        
            <Footer></Footer>
        </div>
    )
};

export default TiposEditores;
