"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const operaciones_1 = require("./operaciones");
//Definiendo objetos(literal) estudiate
const estudiante1 = {
    nombre: "Anni",
    apellido: "Avendaño",
    edad: 17,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 1019605452
};
const estudiante2 = {
    nombre: "Axel",
    apellido: "Torres",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 1022369869
};
const estudiante3 = {
    nombre: "Luna",
    apellido: "Gutierrez",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 1019220987
};
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
//Crear un arreglo de estudiantes
const listaEstudiante = [estudiante1, estudiante1];
console.log(listaEstudiante);
//recorrer el arreglo:
(0, recorrerEstudiantes_1.default)(listaEstudiante);
//OPERACIONES CON ARREGLOS:
console.log("----------");
console.log("Antes de insertar");
console.log(listaEstudiante);
(0, operaciones_1.insertarEstudiante)(estudiante2, listaEstudiante);
console.log("----------");
console.log("Despues de insertar");
console.log(listaEstudiante);
/*
actualizarEstudiante(1, listaEstudiante, "Chico","Serna")
console.log(listaEstudiante)*/
console.log("----------");
console.log("Antes de borrar");
console.log(listaEstudiante);
(0, operaciones_1.borrarEstudiante)(1, listaEstudiante);
console.log("----------");
console.log("Despues de borrar");
console.log(listaEstudiante);
