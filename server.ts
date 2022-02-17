import { config } from "dotenv";
config();
import http = require("http");

import App from "./src/app";

const apps = new App().app;
var httpServer = http.createServer(apps);

const start = () => {
  httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running:  http://localhost:${process.env.PORT}`);
  });
};
start();
