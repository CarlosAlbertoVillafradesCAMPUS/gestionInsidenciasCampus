import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoTipoArea} from "../controller/dtoTipoArea.js"

const validateTipoArea = express();

validateTipoArea.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoTipoArea, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateTipoArea;