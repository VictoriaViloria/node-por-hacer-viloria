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
        let listado = porHacer.getListado(); //se manda a llamar como funcion
        for (let tarea of listado) {
            console.log('==== Por Hacer ====='.green);
            console.log('descripcion: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================='.green);
        };
        console.log('mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('actualiza una tarea por hacer');
        break;
    default:
        console.log('comando no es reconocido');
        break;
}