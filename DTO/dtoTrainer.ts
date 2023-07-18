import { Expose, Transform, Type } from "class-transformer";
import {IsInt, IsString, IsDefined} from "class-validator"

export class dtoTrainer{
    @IsInt()
    @Expose({name:"cc"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada cc"};}, {toClassOnly: true})
    trai_id:number;

    @IsString()
    @Expose({name:"nombre_completo"})
    @Transform(({value}) =>  {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas nom"};}, {toClassOnly:true})
    trai_nombre:string;

    @Expose({name:"email_personal"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_personal es obligatorio` }}})
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value;
     else throw {status: 400, message:`Error en los parametros de entradas`};},{ toClassOnly: true})
    trai_emailPersonal:string;

    @Expose({name:"email_corporativo"})
    @IsDefined({message: ()=>{throw {status: 401, message: `El parametro email_corporativo es obligatorio` }}})
    @Transform(({value})=>{if(/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value)) return value;
     else throw {status: 400, message:`Error en los parametros de entradas`};},{ toClassOnly: true})
    trai_emailCorporativo:string;

    @IsString()
    @Expose({name:"tel_movil"})
    @Transform(({value}) =>  {if(/^[\d\s+]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas tel movil"};}, {toClassOnly:true})
    trai_telMovil:string;

    @IsString()
    @Expose({name:"tel_residencial"})
    @Transform(({value}) =>  {if(/^[\d\s+]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas tel resi"};}, {toClassOnly:true})
    trai_telResidencial:string;

    @IsString()
    @Expose({name:"tel_empresarial"})
    @Transform(({value}) =>  {if(/^[\d\s+]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entrada tel_empre"};}, {toClassOnly:true})
    trai_telEmpresa:string;

    @IsString()
    @Expose({name:"tel_movil_empresa"})
    @Transform(({value}) =>  {if(/^[\d\s+]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas tel movil emp"};}, {toClassOnly:true})
    trai_telMovilEmpresa:string;

    constructor(trai_id:number, trai_nombre:string, trai_emailPersonal:string, trai_emailCorporativo:string, trai_telMovil:string, trai_telResidencial:string, trai_telEmpresa:string, trai_telMovilEmpresa:string){
        this.trai_id = trai_id;
        this.trai_nombre = trai_nombre;
        this.trai_emailPersonal = trai_emailPersonal;
        this.trai_emailCorporativo = trai_emailCorporativo;
        this.trai_telMovil = trai_telMovil;
        this.trai_telResidencial = trai_telResidencial;
        this.trai_telEmpresa = trai_telEmpresa;
        this.trai_telMovilEmpresa = trai_telMovilEmpresa;
    }
}