import { Expose, Transform, Type } from "class-transformer";
import {IsString, IsDefined} from "class-validator"

export class dtoCategoriaInsidencia{
    @IsString()
    @Expose({name:"nombre"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro nombre es obligatorio` }}})
    @Transform(({value}) =>  {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
    cat_nombre:string;

    constructor(cat_nombre:string){
        this.cat_nombre = cat_nombre;
    }
}