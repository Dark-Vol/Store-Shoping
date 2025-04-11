const express = require("express");
const InstrumentController = require("../controllers/instrumentController");

const router = express.Router();

// 📌 Основные CRUD-операции
router.get("/", InstrumentController.getAllInstruments);
router.get("/:id", InstrumentController.getInstrumentById);
router.post("/", InstrumentController.createInstrument);
router.put("/:id", InstrumentController.updateInstrument);
router.delete("/:id", InstrumentController.deleteInstrument);

// 📌 Категории и производители
router.get("/categories", InstrumentController.getInstrumentCategories);
router.get("/manufacturers", InstrumentController.getInstrumentManufacturers);
router.get("/category/:categoryId", InstrumentController.getInstrumentByCategoryId);
router.get("/manufacturer/:manufacturerId", InstrumentController.getInstrumentsByManufacturer);

// 📌 Фильтрация, сортировка и пагинация
router.get("/search/:query", InstrumentController.searchInstruments);
router.get("/filter", InstrumentController.filterInstruments);
router.get("/sort", InstrumentController.sortInstruments);
router.get("/pagination", InstrumentController.paginateInstruments);
router.get("/count", InstrumentController.countInstruments);

// 📌 Комбинированные фильтры
router.get("/filter/category/:categoryId/price", InstrumentController.getInstrumentsByCategoryAndPriceRange);
router.get("/filter/manufacturer/:manufacturerId/category/:categoryId", InstrumentController.getInstrumentsByManufacturerAndCategory);
router.get("/filter/manufacturer/:manufacturerId/price", InstrumentController.getInstrumentsByManufacturerAndPriceRange);
router.get("/filter/manufacturer/:manufacturerId/rating", InstrumentController.getInstrumentsByManufacturerAndRating);
router.get("/filter/price", InstrumentController.getInstrumentsByPriceRange);
router.get("/filter/rating", InstrumentController.getInstrumentsByRating);
router.get("/filter/availability", InstrumentController.getInstrumentsByAvailability);

// 📌 Фото
router.get("/photos/:id", InstrumentController.getInstrumentPhotos);
router.post("/photos", InstrumentController.addInstrumentPhoto);
router.delete("/photos/:id", InstrumentController.deleteInstrumentPhoto);

// 📌 Отзывы
// router.get("/reviews/:id", InstrumentController.getInstrumentReviews);
// router.post("/reviews", InstrumentController.addInstrumentReview);
// router.delete("/reviews/:id", InstrumentController.deleteInstrumentReview);

// 📌 Рейтинги
// router.get("/ratings/:id", InstrumentController.getInstrumentRatings);
// router.post("/ratings", InstrumentController.addInstrumentRating);
// router.delete("/ratings/:id", InstrumentController.deleteInstrumentRating);

module.exports = router;