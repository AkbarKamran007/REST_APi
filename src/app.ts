import express, { Request, Response, Application } from "express";
import router from "./Api/routes/router";
import cors from "cors";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initialize();

    router(this.app);
  }

  private initialize() {
    this.app.use(cors({ credentials: true, origin: true }));
    this.app.use(express.json());
  }
}
export default App;
