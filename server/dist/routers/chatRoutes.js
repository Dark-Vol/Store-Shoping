"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = __importDefault(require("../controllers/chatController"));
const router = (0, express_1.Router)();
router.post("/ticket", chatController_1.default.createSupportTicket);
router.post("/closeTicket", chatController_1.default.closeSupportTicket);
router.post("/message", chatController_1.default.saveMessage);
router.get("/message/:room", chatController_1.default.getMessages);
exports.default = router;
//# sourceMappingURL=chatRoutes.js.map