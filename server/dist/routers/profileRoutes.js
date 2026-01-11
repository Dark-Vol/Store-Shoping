"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = __importDefault(require("../controllers/profileController"));
const router = (0, express_1.Router)();
router.get("/", profileController_1.default.getProfile);
router.post("/", profileController_1.default.createProfile);
router.put("/:id", profileController_1.default.updateProfile);
exports.default = router;
//# sourceMappingURL=profileRoutes.js.map