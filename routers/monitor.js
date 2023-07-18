import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateMonitor from "../middleware/validateMonitor.js";

dotenv.config();
let storageMonitor = Router();

let con = undefined;
storageMonitor.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageMonitor.get("/", validateID, (req,res)=>{
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

storageMonitor.post("/", validateMonitor, (req,res)=>{
    // {
    //     "monitor": 789,
     //       "estado": "buen estado"
    //   }
    con.query(
        `INSERT INTO monitor SET ?`,
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

storageMonitor.put("/", validateMonitor, validateID, (req,res)=>{
    con.query(
        `UPDATE monitor SET ? WHERE id = ?`,
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

storageMonitor.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM monitor WHERE id = ?`,
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

export default storageMonitor;