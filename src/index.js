const express = require('express');

//Inicialización
require('./config/config')
require('./database/InitDB');
const app = express();
//Schemas
const Trabajadores = require('./schemas/trabajadores');
//Opciones
app.set('port', process.env.PORT || 3000);
//Funciones
const {anadirTrabajador,eliminarTrabajador,actualizarTrabajador,buscarTrabajadoresNombre} = require('./database/DBTrabajador');
//Variables globales

//Rutas
app.use(require('./routes/index'));
//app.use(require('./routes/users'));
//Archivos estaticos
//app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));
//Inico servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port '+ app.get('port'))
});
//mensaje

var trabajador = new Trabajadores()
    trabajador._id = 7
    trabajador.Nombre = "Daniel"
    console.log(trabajador);
anadirTrabajador(trabajador);
buscarTrabajadoresNombre("Daniel");