const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

// Métodos principales
// Listar todos
exports.list = async () => {
    return Usuario.find();
}

// Registrarse
exports.create = async (datos) => {
    let nuevoUsuario = new Usuario(datos);
    return await nuevoUsuario.save();
};

// Eliminar cuenta (por nickname)
exports.delete = async (nickname) => {
    return await Usuario.deleteOne(nickname);
};

// Actualizar datos del usuario (por nickname)
exports.update = async (nickname, nuevosDatos) => {
    return await Usuario.updateOne(nickname, nuevosDatos);
};

// Verificar inicio de sesión
exports.login = async (datos) => {
    return Usuario.findOne(datos);
}