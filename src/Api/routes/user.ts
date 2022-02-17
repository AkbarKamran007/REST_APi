import { Router } from "express";
import { userController } from "../controller/user/controller";
let user = new userController();
import { authenticateToken } from "../middleware/jwt";

const router = Router();
router.get("/user", authenticateToken, user.getUser);

export default router;
