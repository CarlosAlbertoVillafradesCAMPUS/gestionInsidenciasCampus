import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateComputador from "../middleware/validateComputador.js";
import validateID from "../middleware/validateID.js";

dotenv.config();
let storageComputador = Router();

let con = undefined;
storageComputador.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageComputador.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM computador WHERE comp_id = ?`, req.query.id]
    :[`SELECT * FROM computador`]
    con.query(
        ...sql,
        (err,data,fil)=>{
            if (err) {
               res.status(500).send("Error al traer los datos") 
            }else{
                res.send(data)
            }
        }

    )
})

storageComputador.post("/", validateComputador, (req,res)=>{
    con.query(
        `INSERT INTO computador SET ?`,
        [req.body],
        (err,data,fil)=>{
            if (err) {
               res.status(500).send("Error al agregar") 
            }else{
                res.send("Agregado con exito")
            }
        }

    )
})

storageComputador.put("/", validateComputador, validateID, (req,res)=>{
    console.log(req.body);
    con.query(
        `UPDATE computador SET ? WHERE comp_id = ?`,
        [req.body, req.query.id],
        (err,data,fil)=>{
            if (err) {
               res.status(500).send("Error al modificar los datos") 
            }else{
                res.send("Modificado con exito")
            }
        }

    )
})

storageComputador.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM computador WHERE comp_id = ?`,
        [req.query.id],
        (err,data,fil)=>{
            if (err) {
               res.status(500).send("Error al eliminar") 
            }else{
                res.send("Eliminado con exito")
            }
        }

    )
})

export default storageComputador;