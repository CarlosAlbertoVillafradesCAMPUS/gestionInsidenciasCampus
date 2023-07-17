import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateInventario from "../middleware/validateInventario.js";

dotenv.config();
let storageInvnetario = Router();

let con = undefined;
storageInvnetario.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageInvnetario.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM inventario WHERE inv_id = ?`, req.query.id]
    :[`SELECT * FROM inventario`]
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

storageInvnetario.post("/", validateInventario, (req,res)=>{
    // {
    //     "nombre": "REVIEW"
    //   }
    con.query(
        `INSERT INTO inventario SET ?`,
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

storageInvnetario.put("/", validateInventario, validateID, (req,res)=>{
    con.query(
        `UPDATE inventario SET ? WHERE inv_id = ?`,
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

storageInvnetario.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM inventario WHERE inv_id = ?`,
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

export default storageInvnetario;