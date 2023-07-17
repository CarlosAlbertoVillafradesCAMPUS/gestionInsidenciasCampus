import { Expose, Transform, Type } from "class-transformer";
import {IsInt} from "class-validator"

export class dtoMouse{
    @IsInt()
    @Expose({name:"mouse"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    id:number;

    constructor(id:number){
        this.id = id;
    }
}