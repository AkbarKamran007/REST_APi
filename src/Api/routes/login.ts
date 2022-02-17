import { Router } from "express";
import loginController from "../controller/login/controller";

const router = Router();
router.post("/login", loginController.login);

export default router;
