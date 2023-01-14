import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Contacto.module.css';

// Custom components
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';

// Iconos personalizados
import FaDiscord from '../../components/Icons/FaDiscord/FaDiscord';
import FaFacebook from '../../components/Icons/FaFacebook/FaFacebook';
import FaYoutube from '../../components/Icons/FaYoutube/FaYoutube';
import FaTwitter from '../../components/Icons/FaTwitter/FaTwitter';

const Contacto = () => {

  useEffect(() => {
    document.title = "Contacto | Editor's Corp";
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container- p-0">
      <Menu ></Menu>

      <div className="p-0 card shadow-lg mt-5 px-5 py-5 mx-5">
          <h2 className="text-center m-0 p-0">
              Contacto
          </h2>

          <div>
            <div className="row justify-content-center">
                <div className="p-0">
                    <h5 className="d-flex align-items-center m-0">
                      <FontAwesomeIcon  className="h1 m-0 p-0 me-2" icon={faEnvelope} />
                      <span className="p-0">
                          Editorscorp.col@gmail.com
                      </span>
                    </h5>
                </div>

                <div className="p-0 mt-3">
                    <h5 className="d-flex align-items-center m-0" >
                      <FontAwesomeIcon  className="h1 m-0 p-0 me-2" icon={faPhone} />
                      <span className="p-0">
                          +57 3167461609
                      </span>
                    </h5>
                  </div>
              
                  <div className="p-0 mt-3">
                    <h5 className="d-flex align-items-center m-0" >
                      <FaDiscord className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Discord: Editor's Corp
                      </span>
                    </h5>
                  </div>
              
                  <div className="p-0 mt-3">
                    <h5 className="d-flex align-items-center m-0" >
                      <FaTwitter className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Twitter: Editor's Corp
                      </span>
                    </h5>
                  </div>

                  <div className="p-0 mt-3">
                    <h5 className="d-flex align-items-center m-0" >
                      <FaFacebook className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Facebook: Editor's Corp
                      </span>
                    </h5>
                  </div>

                  <div className="p-0 mt-3">
                    <h5 className="d-flex align-items-center m-0">
                      <FaYoutube className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Youtube: Editor's Corp
                      </span>
                    </h5>
                  </div>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default Contacto;
