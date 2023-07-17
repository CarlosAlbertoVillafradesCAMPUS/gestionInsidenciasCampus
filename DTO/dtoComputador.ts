import { Expose, Transform, Type } from "class-transformer";
import {IsInt} from "class-validator"

export class dtoComputador{
    @IsInt()
    @Expose({name:"monitor"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    comp_monitor_fk:number;

    @IsInt()
    @Expose({name:"teclado"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    comp_teclado_fk:number;

    @IsInt()
    @Expose({name:"mouse"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    comp_mouse_fk:number;

    @IsInt()
    @Expose({name:"diadema"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    comp_diadema_fk:number;

    constructor(comp_monitor_fk:number, comp_teclado_fk:number, comp_mouse_fk:number, comp_diadema_fk:number){
        this.comp_monitor_fk = comp_monitor_fk;
        this.comp_teclado_fk = comp_teclado_fk;
        this.comp_mouse_fk = comp_mouse_fk;
        this.comp_diadema_fk = comp_diadema_fk;
    }
}