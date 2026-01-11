import { Router } from "express";
import AdminController from "@controllers/adminController";

const router = Router();

router.post("/login", AdminController.loginAdmin);
router.post("/relogin", AdminController.reloginAdmin);
router.get("/ticket", AdminController.showSupportTicket);

export default router;

