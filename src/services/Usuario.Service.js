import axios from 'axios';

class UsuarioService {
    // Para iniciar sesión
    // Se verifica que el nick exista
    async verificarNick(nick) {
        let existeNick = await axios
            .get('http://localhost:3001/usuario-verificar-nick',
                {
                    params: {
                        nick
                    }
                }
            );

        return existeNick["data"];
    }

    // Verificar si ya existe un correo
    async verifyEmail(email) {
        let emailExists = await axios
            .get('http://localhost:3001/usuario-verificar-correo',
                {
                    params: {
                        email
                    }
                }
            );
        
        return emailExists["data"];
    }

    // Iniciar sesión
    async login(nick, contrasena) {
        return await axios
            .post(`http://localhost:3001/usuario-login`,
                {
                    nick,
                    contrasena
                });
    }

    // Registrarse
    async singUp(datosJson) {
        let singUpUser = await axios.post('http://localhost:3001/usuario', datosJson);
        console.log({singUpUser});
        return singUpUser.data;
    }

    // Obtener datos importantes después de iniciar sesión
    async getData(nick) {
        let searchUser = await axios.get(`http://localhost:3001/usuario/datos/?nick=${nick}`);
        return searchUser.data;
    }

    // Obtener todos los datos de un usuario para la sección de ajustes
    async getAllData(nick) {
        let searchUser = await axios.get(`http://localhost:3001/usuario/all/?nick=${nick}`);
        return searchUser.data;
    }

    // Buscar editores
    async searchEditors(nick) {
        let searchEditors = await axios.get(`http://localhost:3001/usuario/busqueda/?nick=${nick}`);

        return searchEditors.data;
    }

    // Para actualizar los datos
    async updateData(data) {
        let dataWasUpdated = await axios.put(`http://localhost:3001/usuario`, data);
        return dataWasUpdated.data;
    }

}

export default new UsuarioService();