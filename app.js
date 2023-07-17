import dotenv from "dotenv";
import express from "express";
import storageComputador from "./routers/computador.js";
import storageMonitor from "./routers/monitor.js";
import storageTeclado from "./routers/teclado.js";
import storageMouse from "./routers/mouse.js";
import storageDiadema from "./routers/diadema.js";
import storageTipoArea from "./routers/tipoArea.js";
import storageArea from "./routers/area.js";
import storageInvnetario from "./routers/inventario.js";

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/computador", storageComputador);
appExpress.use("/monitor", storageMonitor);
appExpress.use("/teclado", storageTeclado);
appExpress.use("/mouse", storageMouse);
appExpress.use("/diadema", storageDiadema);
appExpress.use("/tipoArea", storageTipoArea);
appExpress.use("/area", storageArea);
appExpress.use("/inventario", storageInvnetario);

let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=> console.log(`http://${config.hostname}:${config.port}`))