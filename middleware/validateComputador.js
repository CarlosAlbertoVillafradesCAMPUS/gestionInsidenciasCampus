import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoComputador} from "../controller/dtoComputador.js"

const validateComputador = express();

validateComputador.use (async(req,res,next) => {
    try {
        let data = plainToClass(dtoComputador, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateComputador;