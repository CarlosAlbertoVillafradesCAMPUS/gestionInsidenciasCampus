import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoDiadema} from "../controller/dtoDiadema.js"

const validateDiadema = express();

validateDiadema.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoDiadema, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateDiadema;