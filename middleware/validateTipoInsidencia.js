import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoTipoInsidencia} from "../controller/dtoTipoInsidencia.js"

const validateTipoInsidencia = express();

validateTipoInsidencia.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoTipoInsidencia, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateTipoInsidencia;