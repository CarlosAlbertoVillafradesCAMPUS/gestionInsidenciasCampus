import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateTrainer from "../middleware/validateTrainer.js";

dotenv.config();
let storageTrainer = Router();

let con = undefined;
storageTrainer.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageTrainer.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT * FROM trainer WHERE trai_id = ?`, req.query.id]
    :[`SELECT * FROM trainer`]
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

storageTrainer.post("/", validateTrainer, (req,res)=>{
    // {
//   "cc": 78895433,
//   "nombre_completo": "Carlos",
//   "email_personal": "carlos@gmail.com",
//   "email_corporativo": "carlosSerio@gmail.com",
//   "tel_movil": "3175845475",
//   "tel_residencial": "5748951",
//   "tel_empresarial": "6523574",
//   "tel_movil_empresa": "3185487264"
// }
    con.query(
        `INSERT INTO trainer SET ?`,
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

storageTrainer.put("/", validateTrainer, validateID, (req,res)=>{
    con.query(
        `UPDATE trainer SET ? WHERE trai_id = ?`,
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

storageTrainer.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM trainer WHERE trai_id = ?`,
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

export default storageTrainer;