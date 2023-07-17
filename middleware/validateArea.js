import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoArea} from "../controller/dtoArea.js"

const validateArea = express();

validateArea.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoArea, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateArea;