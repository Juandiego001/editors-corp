import axios from 'axios';

class TratoService {
    // Enviar el trato
    async enviarTrato(datosJson) {
        return await axios.post('http://localhost:3000/trato', datosJson);
    };

    // Obtener todos los tratos
    async obtenerTratos() {
        return await axios.get('http://localhost:3000/tratos-editor', {nickEditor: 'santi'});
    };

}

export default new TratoService();