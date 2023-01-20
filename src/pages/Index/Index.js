import { React, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import styles from './Index.module.css';
import { useNavigate } from 'react-router-dom';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Index = (props) => {
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();
    
    useEffect(() => {
        console.log(cookies);
        if (!Object.keys(cookies).includes("nick")) navigate("/login");
    }, []);

    return (
        <div className="container-fluid p-0">
            {/* Menú de la página */}
            <Menu></Menu>
        
            {/* <!-- Lugar donde se publicarán noticias o videos que algunos editores estén dispuestos a publicar --> */}
            <div className="container-fluid">
        
                {/* <!-- Ejemplo #1 de publicacion --> */}
                <div className="container-fluid mt-5">

                    <div className="container-fluid">
                        <button className="btn text-dark">
                            Admin
                        </button>
                    </div>

                    {/* Publicación en cuestión (img, video, etc) */}
                    <div className="container-fluid m-0">
                        <img className="w-100" src="./imgs/example.jpg" alt="Imagen de ejemplo publicación" />
                    </div>
        
                    <div className="container-fluid row mt-4">
                        <div className="container-fluid col text-center">
                            <button className="btn btn-primary w-75">
                                Me gusta
                            </button>
                        </div>

                        <div className="container-fluid col text-center">
                            <button className="btn btn-success w-75">
                                Comentar
                            </button>
                        </div>
                        
                        <div className="container-fluid col text-center">
                            <button className="btn btn-light w-75" variant="light">
                                Descripción
                            </button>
                        </div>
                    </div>

                </div>
        
            </div>

            {/* Footer de la página */}
            <Footer></Footer>
        </div>
    )
};

export default Index;
