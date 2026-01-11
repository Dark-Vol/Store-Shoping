"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class ItemsController {
    /* Получение всех товаров */
    static async getAllItems(req, res) {
        try {
            const items = await models_1.Item.findAll();
            return res.status(200).json(items);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение товара по id */
    static async getItemById(req, res) {
        const { id } = req.params;
        try {
            const item = await models_1.Item.findOne({ where: { id: Number(id) } });
            if (!item) {
                return res.status(404).json({ message: "Товар не найден" });
            }
            return res.status(200).json(item);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    static async createItem(req, res) {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({ message: "Введите корректные данные" });
        }
        try {
            const item = await models_1.Item.create({ serialNumber: name, price, description });
            return res.status(201).json(item);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Обновление товара по id */
    static async updateItem(req, res) {
        const { id } = req.params;
        const { name, price, description } = req.body;
        try {
            const item = await models_1.Item.findOne({ where: { id: Number(id) } });
            if (!item) {
                return res.status(404).json({ message: "Товар не найден" });
            }
            await item.update({ serialNumber: name, price, description });
            return res.status(200).json(item);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Удаление товара по id */
    static async deleteItem(req, res) {
        const { id } = req.params;
        try {
            const item = await models_1.Item.findOne({ where: { id: Number(id) } });
            if (!item) {
                return res.status(404).json({ message: "Товар не найден" });
            }
            await item.destroy();
            return res.status(200).json({ message: "Товар успешно удален" });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = ItemsController;
//# sourceMappingURL=itemsController.js.map