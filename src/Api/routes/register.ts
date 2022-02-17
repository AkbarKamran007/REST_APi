import { Router } from "express";
import { registerController } from "../controller/register/controller";
let registerLogin = new registerController();

const router = Router();

router.post("/register", registerLogin.registerAdmin);

export default router;
