import { Router } from "express";
import ChatController from "@controllers/chatController";

const router = Router();

router.post("/ticket", ChatController.createSupportTicket);
router.post("/closeTicket", ChatController.closeSupportTicket);
router.post("/message", ChatController.saveMessage);
router.get("/message/:room", ChatController.getMessages);

export default router;

