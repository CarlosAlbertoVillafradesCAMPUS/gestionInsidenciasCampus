import { Expose, Transform, Type } from "class-transformer";
import {IsString, IsDefined} from "class-validator"

export class dtoTipoArea{
    @IsString()
    @Expose({name:"nombre"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre es obligatorio` }}})
    @Transform(({value}) =>  {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
    tip_area_nombre:string;

    constructor(tip_area_nombre:string){
        this.tip_area_nombre = tip_area_nombre;
    }
}