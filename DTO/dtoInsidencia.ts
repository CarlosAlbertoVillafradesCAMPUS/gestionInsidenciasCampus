import { Expose, Transform, Type } from "class-transformer";
import {IsInt, IsDefined, IsString} from "class-validator"

export class dtoInsidencia{
    @IsInt()
    @Expose({name:"trainer"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro trainer es obligatorio` }}})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    insi_trainer_fk:number;

    @IsInt()
    @Expose({name:"categoria_insidencia"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro categoria_insidencia es obligatorio` }}})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    insi_categoria_fk:number;

    @IsInt()
    @Expose({name:"tipo_insidencia"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipo_insidencia es obligatorio` }}})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    insi_tipo_fk:number;

    @IsInt()
    @Expose({name:"area"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro area es obligatorio` }}})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    insi_area_fk:number;

    @IsInt()
    @Expose({name:"computador"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro computador es obligatorio` }}})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    insi_computador_fk:number;

    @IsString()
    @Expose({name:"descripcion"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro descripcion es obligatorio` }}})
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value)) return value; 
    else throw {status: 400, message:`Error en los parametros de entrada`};},{ toClassOnly: true})
    insi_descripcion:string;

    constructor(insi_trainer_fk:number, insi_categoria_fk:number, insi_tipo_fk:number, insi_area_fk:number, insi_computador_fk:number, insi_descripcion:string){
        this.insi_trainer_fk = insi_trainer_fk;
        this.insi_categoria_fk = insi_categoria_fk;
        this.insi_tipo_fk = insi_tipo_fk;
        this.insi_area_fk = insi_area_fk;
        this.insi_computador_fk = insi_computador_fk;
        this.insi_descripcion = insi_descripcion;
    }
}