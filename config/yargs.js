const argv = require('yargs') //requiero el paquete YARGS
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true, //obligatorio
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true, //valor por default
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv; //regresar el argv
//para que trabaje necesitamos expprtarlo
module.exports = {
    argv
}