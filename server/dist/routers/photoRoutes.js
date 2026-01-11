"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photoController_1 = __importDefault(require("../controllers/photoController"));
const router = (0, express_1.Router)();
router.get("/", photoController_1.default.getAllPhotos);
router.get("/:id", photoController_1.default.getPhotoById);
router.post("/", photoController_1.default.createPhoto);
router.put("/:id", photoController_1.default.updatePhoto);
router.delete("/:id", photoController_1.default.deletePhoto);
exports.default = router;
//# sourceMappingURL=photoRoutes.js.map