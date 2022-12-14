import axios from 'axios';

class UsuarioService {
    // Para iniciar sesión
    // Se verifica que el nick exista
    async verificarNick(nick) {
        return await axios
            .get('http://localhost:3001/usuario-verificar-nick',
                {
                    params: {
                        nick
                    }
                }
            );
    }

    // Iniciar sesión
    async login(nick, contrasena) {
        return await axios
            .get(`http://localhost:3001/usuario/${nick}`,
                {
                    params: {
                        nick,
                        contrasena
                    }
                });
    }

    // Registrarse
    async singUp(datosJson) {
        return await axios
            .post('http://localhost:3001/usuario', datosJson);
    }

}

export default new UsuarioService();