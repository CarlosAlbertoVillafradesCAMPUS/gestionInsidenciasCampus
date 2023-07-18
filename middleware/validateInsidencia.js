import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoInsidencia} from "../controller/dtoInsidencia.js"

const validateInsidencia = express();

validateInsidencia.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoInsidencia, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateInsidencia;