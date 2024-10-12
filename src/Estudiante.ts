//export type Estudiante = {
    
    //nombre: string;
    //apellido: string;
    //edad: number;
    //tipoIdentificacion: string;
    //numeroIdentificacion: number;

//}

export type Estudiante = {
    
    nombre: string;
    apellido: string;
    edad?: number | string;
    tipoIdentificacion: string;
    numeroIdentificacion: number | string;

}