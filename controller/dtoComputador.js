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
export class dtoComputador {
    constructor(comp_monitor_fk, comp_teclado_fk, comp_mouse_fk, comp_diadema_fk) {
        this.comp_monitor_fk = comp_monitor_fk;
        this.comp_teclado_fk = comp_teclado_fk;
        this.comp_mouse_fk = comp_mouse_fk;
        this.comp_diadema_fk = comp_diadema_fk;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "monitor" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoComputador.prototype, "comp_monitor_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "teclado" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoComputador.prototype, "comp_teclado_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "mouse" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoComputador.prototype, "comp_mouse_fk", void 0);
__decorate([
    IsInt(),
    Expose({ name: "diadema" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoComputador.prototype, "comp_diadema_fk", void 0);
