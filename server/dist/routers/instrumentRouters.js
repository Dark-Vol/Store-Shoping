"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instrumentController_1 = __importDefault(require("../controllers/instrumentController"));
const router = (0, express_1.Router)();
// Основные CRUD-операции
router.get("/", instrumentController_1.default.getAllInstruments);
router.get("/:id", instrumentController_1.default.getInstrumentById);
router.post("/", instrumentController_1.default.createInstrument);
router.put("/:id", instrumentController_1.default.updateInstrument);
router.delete("/:id", instrumentController_1.default.deleteInstrument);
// Категории и производители
router.get("/categories", instrumentController_1.default.getInstrumentCategories);
router.get("/manufacturers", instrumentController_1.default.getInstrumentManufacturers);
router.get("/category/:categoryId", instrumentController_1.default.getInstrumentByCategoryId);
router.get("/manufacturer/:manufacturerId", instrumentController_1.default.getInstrumentsByManufacturer);
// Фильтрация, сортировка и пагинация
router.get("/search/:query", instrumentController_1.default.searchInstruments);
router.get("/filter", instrumentController_1.default.filterInstruments);
router.get("/sort", instrumentController_1.default.sortInstruments);
router.get("/pagination", instrumentController_1.default.paginateInstruments);
router.get("/count", instrumentController_1.default.countInstruments);
// Комбинированные фильтры
router.get("/filter/category/:categoryId/price", instrumentController_1.default.getInstrumentsByCategoryAndPriceRange);
router.get("/filter/manufacturer/:manufacturerId/category/:categoryId", instrumentController_1.default.getInstrumentsByManufacturerAndCategory);
router.get("/filter/manufacturer/:manufacturerId/price", instrumentController_1.default.getInstrumentsByManufacturerAndPriceRange);
router.get("/filter/manufacturer/:manufacturerId/rating", instrumentController_1.default.getInstrumentsByManufacturerAndRating);
router.get("/filter/price", instrumentController_1.default.getInstrumentsByPriceRange);
router.get("/filter/rating", instrumentController_1.default.getInstrumentsByRating);
router.get("/filter/availability", instrumentController_1.default.getInstrumentsByAvailability);
// Фото
router.get("/photos/:id", instrumentController_1.default.getInstrumentPhotos);
router.post("/photos", instrumentController_1.default.addInstrumentPhoto);
router.delete("/photos/:id", instrumentController_1.default.deleteInstrumentPhoto);
exports.default = router;
//# sourceMappingURL=instrumentRouters.js.map