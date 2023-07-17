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
import { IsInt } from "class-validator";
export class dtoInventario {
    constructor(inv_computador_fk, inv_area_fk) {
        this.inv_computador_fk = inv_computador_fk;
        this.inv_area_fk = inv_area_fk;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "computador" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInventario.prototype, "inv_computador_fk", void 0);
__decorate([
    Expose({ name: "area" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoInventario.prototype, "inv_area_fk", void 0);
