import { Estudiante } from "./Estudiante"

export const insertarEstudiante = function (estudiante:Estudiante , arregloEstudiantes : Estudiante[]){
    //instrucciones para
    //agregar(Create) el estudiante
    //al arreglo de estudiantes
    //metodo de Array en js permite insertar
    //un elemento al arreglo?
    arregloEstudiantes.push(estudiante);
}

export const actualizarEstudiante = function(indice : number , listaEstudiantes:Estudiante[], nombre: string, apellido: string)
{
    //instrucciones para actualizar
    //el estudiante que se encuentre
    //en el indice indicado en el
    //parametro
}

export const borrarEstudiante= function (indice : number, listaEstudiantes:Estudiante[]){
    //instrucciones para eliminar un elemento
    //del arreglo que este en el indice de parametro
    // Verificar si el índice es válido
    if (indice >= 0 && indice < listaEstudiantes.length) {
      // Eliminar el elemento en el índice especificado
      listaEstudiantes.splice(indice, 1);
    }
  }