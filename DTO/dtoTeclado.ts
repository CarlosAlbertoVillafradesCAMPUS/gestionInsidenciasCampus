import { Expose, Transform, Type } from "class-transformer";
import {IsInt, IsString} from "class-validator"

export class dtoTeclado{
    @IsInt()
    @Expose({name:"teclado"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    id:number;

    @IsString()
    @Expose({name:"estado"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; 
    else throw {status: 400, message:`Error en los parametros de entrada`};},{ toClassOnly: true})
    tcl_estado:string;

    constructor(id:number, tcl_estado:string){
        this.id = id;
        this.tcl_estado = tcl_estado;
    }
}