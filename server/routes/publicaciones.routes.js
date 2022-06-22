'use strict';

module.exports = (app, connection) => {
    const cPublicacion = require('../controllers/publicacionController.js');

    // Rutas principales para publicación
    app.route('/publicacion')

        // Listar todas las publicaciones
        .get((req, res) => {
            cPublicacion.list()
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Crear una publicación
        .post((req, res) => {
            cPublicacion.createNew(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Actualizar una publicación
        .put((req, res) => {
            cPublicacion.updateId({_id: req.body._id}, req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Eliminar una publicación
        .delete((req, res) => {
            cPublicacion.deleteId(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        });

    // Rutas secundarias para publicación
    app.route('/publicacion-verificar-id')
        .get((req, res) => {
            cPublicacion.searchId({_id: req.query._id})
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

}



