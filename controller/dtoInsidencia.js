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
import { IsInt, IsDefined, IsString } from "class-validator";
export class dtoInsidencia {
    constructor(insi_trainer_fk, insi_categoria_fk, insi_tipo_fk, insi_area_fk, insi_computador_fk, insi_descripcion) {
        this.insi_trainer_fk = insi_trainer_fk;
        this.insi_categoria_fk = insi_categoria_fk;
        this.insi_tipo_fk = insi_tipo_fk;
        this.insi_area_fk = insi_area_fk;
        this.insi_computador_fk = insi_computador_fk;
        this.insi_descripcion = insi_descripcion;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "trainer" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro trainer es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInsidencia.prototype, "insi_trainer_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "categoria_insidencia" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro categoria_insidencia es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInsidencia.prototype, "insi_categoria_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "tipo_insidencia" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro tipo_insidencia es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInsidencia.prototype, "insi_tipo_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "area" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro area es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInsidencia.prototype, "insi_area_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "computador" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro computador es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInsidencia.prototype, "insi_computador_fk", void 0);
__decorate([
    IsString(),
    Expose({ name: "descripcion" }),
    IsDefined({ message: () => { throw { status: 401, message: `El parametro descripcion es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros de entrada` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoInsidencia.prototype, "insi_descripcion", void 0);
