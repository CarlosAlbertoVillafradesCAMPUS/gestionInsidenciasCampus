import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateArea from "../middleware/validateArea.js";

dotenv.config();
let storageArea = Router();

let con = undefined;
storageArea.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageArea.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM area WHERE area_id = ?`, req.query.id]
    :[`SELECT * FROM area`]
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

storageArea.post("/", validateArea, (req,res)=>{
    // {
//   "tipo_area":1,
//   "nombre":"SPUTNIK"
// }
    con.query(
        `INSERT INTO area SET ?`,
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

storageArea.put("/", validateArea, validateID, (req,res)=>{
    con.query(
        `UPDATE area SET ? WHERE area_id = ?`,
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

storageArea.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM area WHERE area_id = ?`,
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

export default storageArea;