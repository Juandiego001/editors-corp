import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './Trato.module.css';
import TratoService from '../../services/Trato.Service';

const Trato = () => {

  const [titulo, setTitulo] = React.useState();
  const [precio, setPrecio] = React.useState();
  const [descripcion, setDescripcion] = React.useState();
  
  const history = useHistory();
  const location = useLocation();

  function handleTitulo(event) {
    setTitulo(event.target.value);
  }

  function handlePrecio(event) {
    setPrecio(event.target.value);
  }

  function handleDescripcion(event) {
    setDescripcion(event.target.value);
  }

  function siguiente(event) {
    history.push({
      pathname: 'metodos-pagos',
      state: {
        nickCliente: location.state.nickCliente,
        titulo: titulo,
        precio: precio,
        descripcion: descripcion 
      }
    });

    alert('Se pasó al apartado de métodos de pagos con éxito!');
    event.preventDefault();
  }

  function cancelar(event) {
    history.push('/iniciar-sesion');
    event.preventDefault();
  }

  return (
    <div className="container w-50 vh-100 m-auto bg-light card shadow-lg">
        <h1 className="w-100 text-center py-4 d-flex justify-content-center align-items-center">Formulario de trato</h1>
        <form className="w-75 m-auto text-center py-5">
            <div className="row">
                <label className="col" for="titulo">Titulo: </label>
                <input onChange={handleTitulo} className="col" type="text" name="titulo" id="titulo"/><br/>
            </div>

            <div className="row py-2">
                <label className="col" for="precio">Precio: </label>
                <input onChange={handlePrecio} className="col" type="number" name="precio" id="precio"/><br/>
            </div>

            <div className="row">
                <label className="col" for="descripcion">Descripción: </label>
                <input onChange={handleDescripcion} className="col" type="text" name="descripcion" id="descriptcion"/><br/>
            </div>

            <button type="submit" onClick={siguiente} className="btn btn-primary w-50 mt-5" >Siguiente</button>
            <button type="submit" onClick={cancelar} className="btn btn-danger w-50 mt-5">Cancelar</button>
        </form>
    </div>
  )};

export default Trato;
