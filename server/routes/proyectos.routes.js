'use strict';

module.exports = (app, connection) => {
    const cProyecto = require('../controllers/proyectoController.js');

    // Rutas principales para proyecto
    app.route('/proyecto')

        // Listar todos los proyectos de un editor
        .get((req, res) => {
            cProyecto.list(req.query)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Crear un proyecto a un editor
        // Anteriormente, desde el cliente, se valida que el nick exista.
        .post((req, res) => {
            cProyecto.createNew(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Actualizar el proyecto de un editor
        .put((req, res) => {
            cProyecto.updateId({_id: req.body._id}, req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

        // Eliminar el proyecto de un editor
        .delete((req, res) => {
            cProyecto.deleteId(req.body)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        });
    
    // Rutas secundarias para proyecto
    app.route('/proyecto-verificar-id')
        
        // Verificar existencia de proyecto por id
        .get((req, res) => {
            cProyecto.verifyId(req.query)
                .then(data => res.send(data))
                .catch(err => res.send(err));
        })

}
