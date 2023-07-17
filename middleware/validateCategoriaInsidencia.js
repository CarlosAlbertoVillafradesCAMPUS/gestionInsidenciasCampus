import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoCategoriaInsidencia} from "../controller/dtoCategoriaInsidencia.js"

const validateCategoriaInsidencia = express();

validateCategoriaInsidencia.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoCategoriaInsidencia, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateCategoriaInsidencia;