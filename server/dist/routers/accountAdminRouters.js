"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controllers/adminController"));
const router = (0, express_1.Router)();
router.post("/login", adminController_1.default.loginAdmin);
router.post("/relogin", adminController_1.default.reloginAdmin);
router.get("/ticket", adminController_1.default.showSupportTicket);
exports.default = router;
//# sourceMappingURL=accountAdminRouters.js.map