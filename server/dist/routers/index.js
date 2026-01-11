"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatRoutes_1 = __importDefault(require("./chatRoutes"));
const accountUserRoutes_1 = __importDefault(require("./accountUserRoutes"));
const accountAdminRouters_1 = __importDefault(require("./accountAdminRouters"));
const router = (0, express_1.Router)();
router.use("/chat", chatRoutes_1.default);
router.use("/account", accountUserRoutes_1.default);
router.use("/admin", accountAdminRouters_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map