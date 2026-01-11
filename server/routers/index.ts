import { Router } from "express";
import chatRoutes from "./chatRoutes";
import accountUserRoutes from "./accountUserRoutes";
import adminRoutes from "./accountAdminRouters";

const router = Router();

router.use("/chat", chatRoutes);
router.use("/account", accountUserRoutes);
router.use("/admin", adminRoutes);

export default router;

