import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoTrainer} from "../controller/dtoTrainer.js"

const validateTrainer = express();

validateTrainer.use(async(req,res,next) => {
    try {
        let data = plainToClass(dtoTrainer, req.body, {excludeExtraneousValues:true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateTrainer;