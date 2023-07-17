import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateDiadema from "../middleware/validateDiadema.js";

dotenv.config();
let storageDiadema = Router();

let con = undefined;
storageDiadema.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageDiadema.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM diadema WHERE id = ?`, req.query.id]
    :[`SELECT * FROM diadema`]
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

storageDiadema.post("/", validateDiadema, (req,res)=>{
    // {
    //     "diadema": 789
    //   }
    con.query(
        `INSERT INTO diadema SET ?`,
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

storageDiadema.put("/", validateDiadema, validateID, (req,res)=>{
    con.query(
        `UPDATE diadema SET ? WHERE id = ?`,
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

storageDiadema.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM diadema WHERE id = ?`,
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

export default storageDiadema;