"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addressController_1 = __importDefault(require("../controllers/addressController"));
const router = (0, express_1.Router)();
router.get("/", addressController_1.default.getAllAddresses);
router.get("/:id", addressController_1.default.getAddressById);
router.post("/", addressController_1.default.createAddress);
router.put("/:id", addressController_1.default.updateAddress);
router.delete("/:id", addressController_1.default.deleteAddress);
exports.default = router;
//# sourceMappingURL=addressRoutes.js.map