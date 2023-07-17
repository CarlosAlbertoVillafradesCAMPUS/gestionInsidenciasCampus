import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateTipoArea from "../middleware/validateTipoArea.js";

dotenv.config();
let storageTipoArea = Router();

let con = undefined;
storageTipoArea.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageTipoArea.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM tipo_area WHERE tip_area_id = ?`, req.query.id]
    :[`SELECT * FROM tipo_area`]
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

storageTipoArea.post("/", validateTipoArea, (req,res)=>{
    // {
    //     "nombre": "REVIEW"
    //   }
    con.query(
        `INSERT INTO tipo_area SET ?`,
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

storageTipoArea.put("/", validateTipoArea, validateID, (req,res)=>{
    con.query(
        `UPDATE tipo_area SET ? WHERE tip_area_id = ?`,
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

storageTipoArea.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM tipo_area WHERE tip_area_id = ?`,
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

export default storageTipoArea;