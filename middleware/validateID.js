import "reflect-metadata";
import {plainToClass} from "class-transformer";
import express from "express";
import {dtoID} from "../controller/dtoID.js"

const validateID = express();
validateID.use(async(req,res,next) => {
    try {
        if (req.query.id) {
            req.query.id = parseInt(req.query.id);
            let data = plainToClass(dtoID, req.query, {excludeExtraneousValues:true})
            req.query = data;
            next();
        }else if (req.params.id){
            req.params.id = parseInt(req.params.id)
            let data = plainToClass(dtoID, req.params, {excludeExtraneousValues:true})
            req.params = data;
            next();
        }else{
            next();
        }
        
    } catch (error) {
        res.status(error.status).send(error)
    }
}) 

export default validateID;