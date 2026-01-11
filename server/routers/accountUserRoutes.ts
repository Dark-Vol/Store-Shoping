import { Router } from "express";
import UserController from "@controllers/userController";

const router = Router();

router.post("/login", UserController.loginUser);
router.post("/register", UserController.createUser);
router.post("/relogin", UserController.reloginUser);

export default router;

