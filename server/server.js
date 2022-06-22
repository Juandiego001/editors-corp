const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');

// Models
const Usuario = require('./models/usuarioModel');
const Trato = require('./models/tratoModel')
const Publicacion = require('./models/publicacionModel')
const Proyecto = require('./models/proyectoModel')
const Opinion = require('./models/opinionModel')

// Conexión a la base de datos
const uri = 'mongodb+srv://admin:oracle11g@clusterdb.rqdng.mongodb.net/Editors?retryWrites=true&w=majority';

// Verificar la conexión
mongoose.connect(uri)
    .then(db => console.log('DB is connected!'))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const rUsuarios = require('./routes/usuarios.routes');
const rTratos = require('./routes/tratos.routes');
const rPublicaciones = require('./routes/publicaciones.routes');
const rProyectos = require('./routes/proyectos.routes');
const rOpiniones = require('./routes/opiniones.routes');

rUsuarios(app);
rTratos(app);
rPublicaciones(app);
rProyectos(app);
rOpiniones(app);

app.listen(3001, () => {
    console.log('Server on port 3001');
});