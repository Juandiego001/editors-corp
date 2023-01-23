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

        return existeNick;
    }

    // Iniciar sesión
    async login(nick, contrasena) {
        return await axios
            .get(`http://localhost:3001/usuario/?nick=${nick}`,
                {
                    params: {
                        nick,
                        contrasena
                    }
                });
    }

    // Registrarse
    async singUp(datosJson) {        
        return await axios.post('http://localhost:3001/usuario', datosJson);
    }

    // Obtener datos importantes después de iniciar sesión
    async getData(nick) {
        return await axios.get(`http://localhost:3001/usuario/datos/?nick=${nick}`);
    }

}

export default new UsuarioService();