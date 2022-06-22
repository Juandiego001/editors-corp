'use strict';

// const mongodb = require('mongodb');
// const fs = require('fs');
// const uri = 'mongodb+srv://admin:oracle11g@clusterdb.rqdng.mongodb.net/Editors?retryWrites=true&w=majority';

module.exports = function (app) {
    const cUsuario = require('../controllers/usuarioController.js');

    // Rutas principales para usuario
    app.route('/usuario')

        // Obtener todos los usuarios
        .get((req, res) => {
            cUsuario.list(req.query)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Registrar un usuario
        .post((req, res) => {            
            cUsuario.create(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Actualizar un usuario
        .put((req, res) => {
            cUsuario.update({nick: req.body.nick}, req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Eliminar un usuario
        .delete((req, res) => {
            cUsuario.delete({nick: req.body.nick})
                .then(data => res.send(data))
                .catch(err => res.send(err));
        });
    
    // Rutas secundarias para usuario
    app.route('/usuario/:nick')

        // Iniciar sesión    
        .get((req, res) => {

            // Si no se envió nada desde el cliente, no se deja iniciar sesión
            if (req.query.nick == undefined) {
                res.send(false);
            } else {
                cUsuario.login(req.query)
                    .then(data => {                    
                        // Si de los datos recibidos el arreglo de data, es mayor a 0
                        // es porque inició sesión correctamente
                        if (data != null) {
                            res.send(true);
                        } else {
                            res.send(false);
                        }
                    })
                    .catch(err => res.send(err));
            }
        });
    
}