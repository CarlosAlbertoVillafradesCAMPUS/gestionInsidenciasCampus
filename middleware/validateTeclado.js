import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoTeclado} from "../controller/dtoTeclado.js"

const validateTeclado = express();

validateTeclado.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoTeclado, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateTeclado;