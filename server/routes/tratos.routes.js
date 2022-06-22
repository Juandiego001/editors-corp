'use strict';

module.exports = (app, connection) => {
    const cTrato = require('../controllers/tratoController.js');

    // Rutas principales para trato
    app.route('/trato')

        // Listar todos los tratos del usuario
        .get((req, res) => {
            cTrato.list(req.query)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Crear un nuevo trato editor-usuario
        .post((req, res) => {
            cTrato.createNew(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
                
        })

        // Actualizar un trato 
        .put((req, res) => {
            let id = {
                _id: req.body._id
            };

            cTrato.updateId(id, req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Eliminar un trato por id
        .delete((req, res) => {
            cTrato.deleteId(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        });
    
    // Rutas secundarias para trato
    app.route('/trato-verificar-id')

        // Verificar que existe un trato para el id
        .get((req, res) => {
            cTrato.verifyId(req.query)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })    

}


