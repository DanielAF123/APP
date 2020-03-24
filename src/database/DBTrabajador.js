    //Schema
    const Trabajadores = require('../schemas/trabajadores');
    //Añadir trabajador
    async function anadirTrabajador(trabajador){
    trabajador.save()
        .then(function(){
            console.log("Usuario creado")
        })
        .catch(function(errores){
            console.error(errores);
        })
    }

    //Eliminar trabajador
    async function eliminarTrabajador(id){
    Trabajadores.findById(id)
    trabajador.remove()
        .then(function(){
            console.log("Usuario con el id: ",id," eliminado");
        })
        .catch(function(errores){
            console.error(errores);
        })
    }

    //Actualizar trabajador
    async function actualizarTrabajador(id,Nombre){
    Trabajadores.findById(id)
        .then(function(){
            trabajador.updateOne({_id: id},{ Nombre: "AAAAA"})
        })
        .then(function(){
            console.log("Usuario actualizado");
        })
        .catch(function(errores){
            console.error(errores);
        })
    }

    //Busqueda de trabajadores
    async function buscarTrabajadoresNombre(nombre){
    Trabajadores.find({Nombre : nombre})
      .then(function(trabajadores){
          console.log(trabajadores);
      })
      .catch(function(errores){
          console.error(errores);
      })
    }


/*Ejemplo de trabajador
var Trabajador = new Trabajadores()
    Trabajador._id = 3
    Trabajador.Nombre = "Daniel"
    Trabajador.Apellidos = "Alcala Fernandez"
    Trabajador.FechaNac = new Date(2000,1,10)
    Trabajador.Ocupacion = "Sin ocupación"
    Trabajador.Sueldo = 1200*/
    module.exports.anadirTrabajador=anadirTrabajador
    module.exports.eliminarTrabajador=eliminarTrabajador
    module.exports.actualizarTrabajador=actualizarTrabajador
    module.exports.buscarTrabajadoresNombre=buscarTrabajadoresNombre
