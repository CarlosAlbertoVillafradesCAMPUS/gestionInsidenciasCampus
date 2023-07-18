var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsInt, IsString, IsDefined } from "class-validator";
export class dtoTrainer {
    constructor(trai_id, trai_nombre, trai_emailPersonal, trai_emailCorporativo, trai_telMovil, trai_telResidencial, trai_telEmpresa, trai_telMovilEmpresa) {
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
__decorate([
    IsInt(),
    Expose({ name: "cc" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada cc" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoTrainer.prototype, "trai_id", void 0);
__decorate([
    IsString(),
    Expose({ name: "nombre_completo" }),
    Transform(({ value }) => {
        if (/^[A-Z-a-z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas nom" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_nombre", void 0);
__decorate([
    Expose({ name: "email_personal" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro email_personal es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros de entradas` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_emailPersonal", void 0);
__decorate([
    Expose({ name: "email_corporativo" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro email_corporativo es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑüÜ\s,.@]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros de entradas` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_emailCorporativo", void 0);
__decorate([
    IsString(),
    Expose({ name: "tel_movil" }),
    Transform(({ value }) => {
        if (/^[\d\s+]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas tel movil" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_telMovil", void 0);
__decorate([
    IsString(),
    Expose({ name: "tel_residencial" }),
    Transform(({ value }) => {
        if (/^[\d\s+]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas tel resi" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_telResidencial", void 0);
__decorate([
    IsString(),
    Expose({ name: "tel_empresarial" }),
    Transform(({ value }) => {
        if (/^[\d\s+]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entrada tel_empre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_telEmpresa", void 0);
__decorate([
    IsString(),
    Expose({ name: "tel_movil_empresa" }),
    Transform(({ value }) => {
        if (/^[\d\s+]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas tel movil emp" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainer.prototype, "trai_telMovilEmpresa", void 0);
