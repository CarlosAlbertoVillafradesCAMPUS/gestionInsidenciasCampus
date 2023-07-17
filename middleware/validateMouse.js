import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoMouse} from "../controller/dtoMouse.js"

const validateMouse = express();

validateMouse.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoMouse, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateMouse;