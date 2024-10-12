import { Estudiante } from "./Estudiante";
import recorrerEstudiantes from "./recorrerEstudiantes";
import { insertarEstudiante , actualizarEstudiante , borrarEstudiante } from "./operaciones";

//Definiendo objetos(literal) estudiate
const estudiante1: Estudiante = {
    nombre: "Anni",
    apellido: "Avendaño",
    edad: 17,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 1019605452

}

const estudiante2: Estudiante = {
    nombre: "Axel",
    apellido: "Torres",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 1022369869
    
}

const estudiante3: Estudiante = {
    nombre: "Luna",
    apellido: "Gutierrez",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 1019220987 
    
}

console.log(estudiante1)
console.log(estudiante2)
console.log(estudiante3)

//Crear un arreglo de estudiantes
const listaEstudiante : (Estudiante) [] =[estudiante1 , estudiante1]
console.log(listaEstudiante)

//recorrer el arreglo:
recorrerEstudiantes(listaEstudiante);

//OPERACIONES CON ARREGLOS:
console.log("----------")
console.log("Antes de insertar")
console.log(listaEstudiante)
insertarEstudiante(estudiante2 , listaEstudiante)
console.log("----------")
console.log("Despues de insertar")
console.log(listaEstudiante)
/*
actualizarEstudiante(1, listaEstudiante, "Chico","Serna")
console.log(listaEstudiante)*/
console.log("----------")
console.log("Antes de borrar")
console.log(listaEstudiante)
borrarEstudiante(1, listaEstudiante)
console.log("----------")
console.log("Despues de borrar")
console.log(listaEstudiante)