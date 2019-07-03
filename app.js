//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('crear por hacer 2');
        console.log(tarea);
        break;
    case 'listar':
        console.log('mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('actualiza una tarea por hacer');
        break;
    default:
        console.log('comando no es reconocido');
        break;
}