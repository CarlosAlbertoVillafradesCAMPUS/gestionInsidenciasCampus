import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateID from "../middleware/validateID.js";
import validateInsidencia from "../middleware/validateInsidencia.js";

dotenv.config();
let storageInsidencia = Router();

let con = undefined;
storageInsidencia.use((req,res,next)=>{
    let my_conexio = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conexio);
    next()
})

storageInsidencia.get("/", validateID, (req,res)=>{
    let sql = (req.query.id)
    ?[`SELECT insi_id, insi_trainer_fk, trai_nombre, insi_categoria_fk, cat_nombre, insi_tipo_fk, tip_nombre, insi_area_fk, area_nombre,insi_computador_fk, insi_descripcion, insi_fecha  FROM insidencia INNER JOIN trainer ON insi_trainer_fk = trai_id  INNER JOIN categoria_insidencia ON insi_categoria_fk = cat_id INNER JOIN tipo_insidencia ON insi_tipo_fk = tip_id INNER JOIN area ON insi_area_fk = area_id WHERE insi_id = ?`, req.query.id]
    :[`SELECT insi_id, insi_trainer_fk, trai_nombre, insi_categoria_fk, cat_nombre, insi_tipo_fk, tip_nombre, insi_area_fk, area_nombre,insi_computador_fk, insi_descripcion, insi_fecha  FROM insidencia INNER JOIN trainer ON insi_trainer_fk = trai_id  INNER JOIN categoria_insidencia ON insi_categoria_fk = cat_id INNER JOIN tipo_insidencia ON insi_tipo_fk = tip_id INNER JOIN area ON insi_area_fk = area_id`]
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

storageInsidencia.post("/", validateInsidencia, (req,res)=>{
    // {
//   "trainer": 12345,
//   "categoria_insidencia": 1,
//   "tipo_insidencia": 2,
//   "area": 4,
//   "computador": 4,
//   "descripcion": "esta pesimo el teclado"
// }
    con.query(
        `INSERT INTO insidencia SET ?`,
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

storageInsidencia.put("/", validateInsidencia, validateID, (req,res)=>{
    con.query(
        `UPDATE insidencia SET ? WHERE insi_id = ?`,
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

storageInsidencia.delete("/", validateID, (req,res)=>{
    con.query(
        `DELETE FROM insidencia WHERE insi_id = ?`,
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

export default storageInsidencia;