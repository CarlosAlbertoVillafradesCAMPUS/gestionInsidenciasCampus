import { Expose, Transform, Type } from "class-transformer";
import {IsInt, IsString, IsDefined} from "class-validator"

export class dtoArea{
    @IsInt()
    @Expose({name:"tipo_area"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    area_tipo_fk:number;

    @IsString()
    @Expose({name:"nombre"})
    @Transform(({value}) =>  {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
    area_nombre:string;

    constructor(area_tipo_fk:number, area_nombre:string){
        this.area_tipo_fk = area_tipo_fk;
        this.area_nombre = area_nombre;
    }
}