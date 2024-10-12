import { Estudiante } from "./Estudiante";


export type tipo={
    nombre: string;
}
const recorrerEstudiantes=(arregloEstudiantes:  (Estudiante | string)[]) =>{
    arregloEstudiantes.forEach(function (elemento){
        console.log(elemento);
        console.log("---------")
    });
    
}

export default recorrerEstudiantes;