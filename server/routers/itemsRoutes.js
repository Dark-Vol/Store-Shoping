const express = require("express");
const ItemsController = require("../controllers/itemsController");

const router = express.Router();

router.get("/", ItemsController.getAllItems); // Получение всех товаров
router.get("/:id", ItemsController.getItemById); // Получение товара по id
router.post("/", ItemsController.createItem); // Создание нового товара
router.put("/:id", ItemsController.updateItem); // Обновление товара по id
router.delete("/:id", ItemsController.deleteItem); // Удаление товара по id

module.exports = router;