import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateCategoriaInsidencia from "../middleware/validateCategoriaInsidencia.js";

dotenv.config();
let storageCategoriaInsidencia = Router();

let con = undefined;
storageCategoriaInsidencia.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageCategoriaInsidencia.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM categoria_insidencia WHERE cat_id = ?`, req.query.id]
    :[`SELECT * FROM categoria_insidencia`]
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

storageCategoriaInsidencia.post("/", validateCategoriaInsidencia, (req,res)=>{
    // {
//   "nombre":"SPUTNIK"
// }
    con.query(
        `INSERT INTO categoria_insidencia SET ?`,
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

storageCategoriaInsidencia.put("/", validateCategoriaInsidencia, validateID, (req,res)=>{
    con.query(
        `UPDATE categoria_insidencia SET ? WHERE cat_id = ?`,
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

storageCategoriaInsidencia.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM categoria_insidencia WHERE cat_id = ?`,
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

export default storageCategoriaInsidencia;