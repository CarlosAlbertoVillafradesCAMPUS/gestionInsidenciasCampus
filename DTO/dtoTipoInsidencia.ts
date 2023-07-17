import { Expose, Transform, Type } from "class-transformer";
import {IsString, IsDefined} from "class-validator"

export class dtoTipoInsidencia{
    @IsString()
    @Expose({name:"nombre"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre es obligatorio` }}})
    @Transform(({value}) =>  {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
    tip_nombre:string;

    constructor(tip_nombre:string){
        this.tip_nombre = tip_nombre;
    }
}