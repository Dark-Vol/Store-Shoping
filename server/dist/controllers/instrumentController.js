"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
const sequelize_1 = require("sequelize");
class InstrumentController {
    /* Получение всех инструментов */
    static async getAllInstruments(req, res) {
        try {
            const instruments = await models_1.Instrument.findAll();
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструмента по id */
    static async getInstrumentById(req, res) {
        const { id } = req.params;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            return res.status(200).json(instrument);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    static async getInstrumentByCategoryId(req, res) {
        const { categoryId } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({ where: { CategoryId: Number(categoryId) } });
            if (!instruments || instruments.length === 0) {
                return res.status(404).json({ message: "Инструменты не найдены" });
            }
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Создание нового инструмента */
    static async createInstrument(req, res) {
        const { instrumentName, description, ManufacturerId, CategoryId } = req.body;
        if (!instrumentName || !description || !ManufacturerId || !CategoryId) {
            return res.status(400).json({ message: "Введите корректные данные" });
        }
        try {
            const instrument = await models_1.Instrument.create({
                instrumentName,
                description,
                ManufacturerId,
                CategoryId,
            });
            return res.status(201).json(instrument);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Обновление инструмента по id */
    static async updateInstrument(req, res) {
        const { id } = req.params;
        const { instrumentName, description, ManufacturerId, CategoryId } = req.body;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            await instrument.update({
                instrumentName,
                description,
                ManufacturerId,
                CategoryId,
            });
            return res.status(200).json(instrument);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Удаление инструмента по id */
    static async deleteInstrument(req, res) {
        const { id } = req.params;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            await instrument.destroy();
            return res.status(204).json({ message: "Инструмент удален" });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Поиск инструментов по названию */
    static async searchInstruments(req, res) {
        const { query } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: {
                    instrumentName: {
                        [sequelize_1.Op.like]: `%${query}%`,
                    },
                },
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Фильтрация инструментов по параметрам */
    static async filterInstruments(req, res) {
        const { categoryId, manufacturerId, priceRange } = req.query;
        try {
            const whereClause = {};
            if (categoryId)
                whereClause.CategoryId = Number(categoryId);
            if (manufacturerId)
                whereClause.ManufacturerId = Number(manufacturerId);
            const instruments = await models_1.Instrument.findAll({ where: whereClause });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Сортировка инструментов по параметрам */
    static async sortInstruments(req, res) {
        const { sortBy, order } = req.query;
        try {
            const instruments = await models_1.Instrument.findAll({
                order: [[sortBy || "instrumentName", order || "ASC"]],
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Пагинация инструментов */
    static async paginateInstruments(req, res) {
        const { page, limit } = req.query;
        try {
            const instruments = await models_1.Instrument.findAll({
                offset: ((Number(page) || 1) - 1) * Number(limit || 10),
                limit: Number(limit || 10),
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение количества инструментов */
    static async countInstruments(req, res) {
        try {
            const count = await models_1.Instrument.count();
            return res.status(200).json({ count });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение категорий инструментов */
    static async getInstrumentCategories(req, res) {
        try {
            const categories = await models_1.Category.findAll();
            return res.status(200).json(categories);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение производителей инструментов */
    static async getInstrumentManufacturers(req, res) {
        try {
            const manufacturers = await models_1.Manufacturer.findAll();
            return res.status(200).json(manufacturers);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение фотографий инструмента */
    static async getInstrumentPhotos(req, res) {
        const { id } = req.params;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            return res.status(200).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Добавление фотографии инструмента */
    static async addInstrumentPhoto(req, res) {
        const { id } = req.params;
        const { photoUrl } = req.body;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            return res.status(201).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Удаление фотографии инструмента */
    static async deleteInstrumentPhoto(req, res) {
        const { id } = req.params;
        const { photoUrl } = req.body;
        try {
            const instrument = await models_1.Instrument.findOne({ where: { id: Number(id) } });
            if (!instrument) {
                return res.status(404).json({ message: "Инструмент не найден" });
            }
            return res.status(200).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение всех инструментов с их категориями и производителями */
    static async getInstrumentsWithCategoriesAndManufacturers(req, res) {
        try {
            const instruments = await models_1.Instrument.findAll({
                include: [
                    { model: models_1.Category },
                    { model: models_1.Manufacturer },
                ],
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по производителю */
    static async getInstrumentsByManufacturer(req, res) {
        const { manufacturerId } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: { ManufacturerId: Number(manufacturerId) },
                include: [{ model: models_1.Manufacturer }],
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по категории */
    static async getInstrumentsByCategory(req, res) {
        const { categoryId } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: { CategoryId: Number(categoryId) },
                include: [{ model: models_1.Category }],
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по диапазону цен */
    static async getInstrumentsByPriceRange(req, res) {
        const { minPrice, maxPrice } = req.query;
        try {
            return res.status(200).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по рейтингу */
    static async getInstrumentsByRating(req, res) {
        const { rating } = req.query;
        try {
            return res.status(200).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по наличию */
    static async getInstrumentsByAvailability(req, res) {
        const { available } = req.query;
        try {
            return res.status(200).json([]);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по производителю и категории */
    static async getInstrumentsByManufacturerAndCategory(req, res) {
        const { manufacturerId, categoryId } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: {
                    ManufacturerId: Number(manufacturerId),
                    CategoryId: Number(categoryId),
                },
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по производителю и диапазону цен */
    static async getInstrumentsByManufacturerAndPriceRange(req, res) {
        const { manufacturerId, minPrice, maxPrice } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: {
                    ManufacturerId: Number(manufacturerId),
                },
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по категории и диапазону цен */
    static async getInstrumentsByCategoryAndPriceRange(req, res) {
        const { categoryId, minPrice, maxPrice } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: {
                    CategoryId: Number(categoryId),
                },
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение инструментов по производителю и рейтингу */
    static async getInstrumentsByManufacturerAndRating(req, res) {
        const { manufacturerId, rating } = req.params;
        try {
            const instruments = await models_1.Instrument.findAll({
                where: {
                    ManufacturerId: Number(manufacturerId),
                },
            });
            return res.status(200).json(instruments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = InstrumentController;
//# sourceMappingURL=instrumentController.js.map