import axios from 'axios';

class UsuarioService {
    // Para iniciar sesión
    // Se verifica que el nick exista
    async verificarNick(nick){
        return await axios
                .get('http://localhost:3000/usuario-verificar-nick', 
                        { params: {
                                nick: nick
                            }
                        }
                    );
    }

    // Iniciar sesión
    async logIn(nick, contrasena){
        return await axios
                        .get('http://localhost:3000/usuario',
                            { params: {
                                    nick: nick,
                                    contrasena: contrasena
                                }
                            });
    }

    // Registrarse

    // Insertar    
}

export default new UsuarioService();