//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear por hacer');
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