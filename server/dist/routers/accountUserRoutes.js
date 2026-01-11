"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = (0, express_1.Router)();
router.post("/login", userController_1.default.loginUser);
router.post("/register", userController_1.default.createUser);
router.post("/relogin", userController_1.default.reloginUser);
exports.default = router;
//# sourceMappingURL=accountUserRoutes.js.map