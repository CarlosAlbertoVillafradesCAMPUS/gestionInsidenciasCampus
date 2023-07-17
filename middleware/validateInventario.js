import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoInventario} from "../controller/dtoInventario.js"

const validateInventario = express();

validateInventario.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoInventario, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateInventario;