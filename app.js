//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('crear por hacer 2');
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado); //se manda a llamar como funcion
        for (let tarea of listado) {
            console.log('==== Por Hacer ====='.green);
            console.log('descripcion: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================='.green);
        };
        // console.log('mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log('actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion); //le voy a mandar el argv.descripcion
        console.log(borrado);
        break;
    case 'listarElegir':

    default:
        console.log('comando no es reconocido');
        break;
}