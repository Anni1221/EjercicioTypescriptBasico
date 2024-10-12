"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    //instrucciones para
    //agregar(Create) el estudiante
    //al arreglo de estudiantes
    //metodo de Array en js permite insertar
    //un elemento al arreglo?
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, listaEstudiantes, nombre, apellido) {
    //instrucciones para actualizar
    //el estudiante que se encuentre
    //en el indice indicado en el
    //parametro
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, listaEstudiantes) {
    //instrucciones para eliminar un elemento
    //del arreglo que este en el indice de parametro
    // Verificar si el índice es válido
    if (indice >= 0 && indice < listaEstudiantes.length) {
        // Eliminar el elemento en el índice especificado
        listaEstudiantes.splice(indice, 1);
    }
};
exports.borrarEstudiante = borrarEstudiante;
