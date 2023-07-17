import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateMouse from "../middleware/validateMouse.js";

dotenv.config();
let storageMouse = Router();

let con = undefined;
storageMouse.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageMouse.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM mouse WHERE id = ?`, req.query.id]
    :[`SELECT * FROM mouse`]
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

storageMouse.post("/", validateMouse, (req,res)=>{
    // {
    //     "mouse": 789
    //   }
    con.query(
        `INSERT INTO mouse SET ?`,
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

storageMouse.put("/", validateMouse, validateID, (req,res)=>{
    con.query(
        `UPDATE mouse SET ? WHERE id = ?`,
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

storageMouse.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM mouse WHERE id = ?`,
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

export default storageMouse;