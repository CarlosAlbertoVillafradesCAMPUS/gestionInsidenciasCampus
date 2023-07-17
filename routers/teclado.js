import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateTeclado from "../middleware/validateTeclado.js";

dotenv.config();
let storageTeclado = Router();

let con = undefined;
storageTeclado.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageTeclado.get("/", validateID, (req,res)=>{
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

storageTeclado.post("/", validateTeclado, (req,res)=>{
    // {
    //     "teclado": 789
    //   }
    con.query(
        `INSERT INTO teclado SET ?`,
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

storageTeclado.put("/", validateTeclado, validateID, (req,res)=>{
    con.query(
        `UPDATE teclado SET ? WHERE id = ?`,
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

storageTeclado.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM teclado WHERE id = ?`,
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

export default storageTeclado;