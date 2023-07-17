import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateTipoInsidencia from "../middleware/validateTipoInsidencia.js";

dotenv.config();
let storageTipoInsidencia = Router();

let con = undefined;
storageTipoInsidencia.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageTipoInsidencia.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM tipo_insidencia WHERE tip_id = ?`, req.query.id]
    :[`SELECT * FROM tipo_insidencia`]
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

storageTipoInsidencia.post("/", validateTipoInsidencia, (req,res)=>{
    // {
//   "nombre":"SPUTNIK"
// }
    con.query(
        `INSERT INTO tipo_insidencia SET ?`,
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

storageTipoInsidencia.put("/", validateTipoInsidencia, validateID, (req,res)=>{
    con.query(
        `UPDATE tipo_insidencia SET ? WHERE tip_id = ?`,
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

storageTipoInsidencia.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM tipo_insidencia WHERE tip_id = ?`,
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

export default storageTipoInsidencia;