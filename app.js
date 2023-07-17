import dotenv from "dotenv";
import express from "express";
import storageComputador from "./routers/computador.js";
import storageMonitor from "./routers/monitor.js";

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/computador", storageComputador);
appExpress.use("/monitor", storageMonitor);

let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=> console.log(`http://${config.hostname}:${config.port}`))