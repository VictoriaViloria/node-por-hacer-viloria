const descripcion = {
    demand: true, //obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true, //valor por default
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs') //requiero el paquete YARGS
    .command('crear', 'crear un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea que envian con el parametro descripcion', {
        descripcion
    })
    .help()
    .argv; //regresar el argv
//para que trabaje necesitamos expprtarlo
module.exports = {
    argv
}