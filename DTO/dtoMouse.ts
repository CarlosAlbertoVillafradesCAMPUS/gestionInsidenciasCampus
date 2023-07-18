import { Expose, Transform, Type } from "class-transformer";
import {IsInt, IsString} from "class-validator"

export class dtoMouse{
    @IsInt()
    @Expose({name:"mouse"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    id:number;

    @IsString()
    @Expose({name:"estado"})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; 
    else throw {status: 400, message:`Error en los parametros de entrada`};},{ toClassOnly: true})
    mou_estado:string;

    constructor(id:number, mou_estado:string){
        this.id = id;
        this.mou_estado = mou_estado;
    }
}