import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacto.module.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

  return (
    <Container className="p-0" fluid>
      <Menu ></Menu>

      <Container className="p-0 card shadow-lg mt-5 px-5 py-5">
          <h2 className="text-center" fluid>
              Contacto
          </h2>

          <Container>
            <Row className="justify-content-center">
                <Container className="p-0" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FontAwesomeIcon  className="h1 m-0 p-0 me-2" icon={faEnvelope} />
                      <span className="p-0">
                          Editorscorp.col@gmail.com
                      </span>
                    </h5>
                </Container>

                <Container className="p-0 mt-3" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FontAwesomeIcon  className="h1 m-0 p-0 me-2" icon={faPhone} />
                      <span className="p-0">
                          +57 3167461609
                      </span>
                    </h5>
                  </Container>
              
                  <Container className="p-0 mt-3" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FaDiscord className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Discord: Editor's Corp
                      </span>
                    </h5>
                  </Container>
              
                  <Container className="p-0 mt-3" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FaTwitter className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Twitter: Editor's Corp
                      </span>
                    </h5>
                  </Container>

                  <Container className="p-0 mt-3" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FaFacebook className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Facebook: Editor's Corp
                      </span>
                    </h5>
                  </Container>

                  <Container className="p-0 mt-3" fluid>
                    <h5 className="d-flex align-items-center m-0" fluid>
                      <FaYoutube className="h1 m-0 p-0 me-2" />
                      <span className="p-0">
                          Youtube: Editor's Corp
                      </span>
                    </h5>
                  </Container>
            </Row>
          </Container>
      </Container>
      <Footer></Footer>
    </Container>
  )
};

export default Contacto;
