"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemsController_1 = __importDefault(require("../controllers/itemsController"));
const router = (0, express_1.Router)();
router.get("/", itemsController_1.default.getAllItems);
router.get("/:id", itemsController_1.default.getItemById);
router.post("/", itemsController_1.default.createItem);
router.put("/:id", itemsController_1.default.updateItem);
router.delete("/:id", itemsController_1.default.deleteItem);
exports.default = router;
//# sourceMappingURL=itemsRoutes.js.map