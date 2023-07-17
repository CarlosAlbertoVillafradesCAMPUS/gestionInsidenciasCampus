import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";

dotenv.config();
let storageMonitor = Router();

let con = undefined;
storageMonitor.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageMonitor.get("/", (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM monitor WHERE id = ?`, req.query.id]
    :[`SELECT * FROM monitor`]
    con.query(
        ...sql,
        (err,data,fil)=>{
            if (err) {
               res.status(500).send("Error en la solicitud") 
            }else{
                res.send(data)
            }
        }

    )
})

export default storageMonitor;