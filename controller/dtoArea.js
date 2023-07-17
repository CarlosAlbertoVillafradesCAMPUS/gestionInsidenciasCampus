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
import { IsInt, IsString } from "class-validator";
export class dtoArea {
    constructor(area_tipo_fk, area_nombre) {
        this.area_tipo_fk = area_tipo_fk;
        this.area_nombre = area_nombre;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "tipo_area" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoArea.prototype, "area_tipo_fk", void 0);
__decorate([
    IsString(),
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[A-Z-a-z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoArea.prototype, "area_nombre", void 0);
