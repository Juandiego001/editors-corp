import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './MetodosPagos.module.css';
import TratoService from '../../services/Trato.Service';

const MetodosPagos = () => {

  const history = useHistory();
  const location = useLocation();

  function crearTrato(){
    const intentoTrato = TratoService.enviarTrato({
      nickEditor: 'santi',
      nickCliente: location.state.nickCliente,
      titulo: location.state.titulo,
      precio: location.state.precio,
      descripcion: location.state.descripcion
    });

    intentoTrato
        .then(data => {
          alert('Se creó el trato con éxito!');
          history.push('/');
          console.log(data);
        })
        .catch(err => {
          alert('Ocurrió un error al intentar crear el trato');
          console.log(err);
        })
  }

  return (
  <div className="container pt-5" style={{width: '415px'}}>
    <div className="card">
        <ul className="nav nav-pills mb-3">
            <li><a href="#nav-tab-card" className="nav-link active" data-bs-toggle="pill"><i className="fa fa-credit-card"></i>Credit Card</a></li>
            <li><a href="#nav-tab-paypal" className="nav-link" data-bs-toggle="pill"><i className="fab fa-paypal"></i>Paypal</a></li>
            <li><a href="#nav-tab-bank" className="nav-link" data-bs-toggle="pill"><i className="fa fa-university"></i>Banco</a></li>
        </ul>

        <div className="tab-content p-3">

            <div className="tab-pane fade show active" id="nav-tab-card">
                <form role="" form>
                    <div className="form-group">
                        <label>Nombre del titular </label>
                        <input type="text" className="form-control" name="" />
                    </div>
                    <div className="form-group">
                        <label>Numero de la tarjeta</label>
                        <div className="input-group w-75">
                            <input type="Number" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" name="" />
                            <div className="text-primary input-group mt-2">
                                <i className="fab fa-cc-visa fa-2x"></i>
                                <i className="fab fa-cc-amex fa-2x mx-3"></i>
                                <i className="fab fa-cc-mastercard fa-2x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Expiracion</label>
                        <div className="input-group">
                            <input type="Number" className="form-control" placeholder="MM" name="" />
                            <input type="Number" className="form-control" placeholder="YY" name="" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>CVV <i className="fa fa-question-circle"></i></label>
                        <input type="Number" className="form-control" name="" />
                    </div>

                    <div className="form-group text-center mt-4">
                        <button className="btn btn-primary" type="button" onClick={() => {
                          crearTrato();
                        }}>Confirmar</button>
                    </div>
                </form>
            </div>

            <div className="tab-pane fade text-center" id="nav-tab-paypal">
                <p className="text-left">Pagar Con paypal online</p>
                <button type="button" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> LOGIN  mi Paypa</button>
                <p className="mt-3">o</p>
                <button type="button" className="btn btn-primary"><i className="fas fa-user"></i>Crear nueva Cuenta </button>

                <p className="mt-4 text-left"><strong>Nota:</strong>Mayor informacion consultar al soporte tecnico.</p>
            </div>

            <div className="tab-pane fade" id="nav-tab-bank">
                <p>DETALLE DE LA CUENTA BANCARIA</p>
                <dl>
                    <dt>BANCO:</dt>
                    <dd> BANCOLOMBIA</dd>

                    <dt>NUMERO DE CUENTA</dt>
                    <dd>000006362571</dd>

                    <dt>ID:</dt>
                    <dd>5236114</dd>
                </dl>
                <p><strong>Note:</strong>Para cualquier informacion contacte con el soporte tecnico</p>
            </div>
        </div>
    </div>
  </div>
)};

export default MetodosPagos;
