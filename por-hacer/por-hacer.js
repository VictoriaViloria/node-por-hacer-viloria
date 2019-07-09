const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no sé pudo grabar', err)
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const crear = (descripcion) => {
        cargarDB();
        let porHacer = {
            descripcion,
            completado: false
        };
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }
    // const getListado = () => {
    //     cargarDB();
    //     return listadoPorHacer;
    // }
const getListado = (completado) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        // console.log('aqui 2');
        // console.log(tarea.descripcion);
        // console.log(tarea.completado);
        return tarea.completado === completado
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return listadoPorHacer;
    } else {
        // console.log('aqui 1');
        // console.log(nuevoListado);
        return nuevoListado;
    }
    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}