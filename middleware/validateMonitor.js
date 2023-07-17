import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoMonitor} from "../controller/dtoMonitor.js"

const validateMonitor = express();

validateMonitor.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoMonitor, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateMonitor;