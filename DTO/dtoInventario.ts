import { Expose, Transform, Type } from "class-transformer";
import {IsInt} from "class-validator"

export class dtoInventario{
    @IsInt()
    @Expose({name:"computador"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    inv_computador_fk:number;

    @Expose({name:"area"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    inv_area_fk:number;

    constructor(inv_computador_fk:number, inv_area_fk:number){
        this.inv_computador_fk = inv_computador_fk;
        this.inv_area_fk = inv_area_fk;
    }
}