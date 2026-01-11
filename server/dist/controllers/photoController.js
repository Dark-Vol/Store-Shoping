"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class PhotoController {
    /* Получение всех фотографий */
    static async getAllPhotos(req, res) {
        try {
            const photos = await models_1.Photo.findAll();
            return res.status(200).json(photos);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение фотографии по id */
    static async getPhotoById(req, res) {
        const { id } = req.params;
        try {
            const photo = await models_1.Photo.findOne({ where: { id: Number(id) } });
            if (!photo) {
                return res.status(404).json({ message: "Фотография не найдена" });
            }
            return res.status(200).json(photo);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Создание новой фотографии */
    static async createPhoto(req, res) {
        const { path, description } = req.body;
        if (!path) {
            return res.status(400).json({ message: "Введите корректные данные" });
        }
        try {
            const photo = await models_1.Photo.create({ path, description });
            return res.status(201).json(photo);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Обновление фотографии по id */
    static async updatePhoto(req, res) {
        const { id } = req.params;
        const { path, description } = req.body;
        try {
            const photo = await models_1.Photo.findOne({ where: { id: Number(id) } });
            if (!photo) {
                return res.status(404).json({ message: "Фотография не найдена" });
            }
            await photo.update({ path, description });
            return res.status(200).json(photo);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Удаление фотографии по id */
    static async deletePhoto(req, res) {
        const { id } = req.params;
        try {
            const photo = await models_1.Photo.findOne({ where: { id: Number(id) } });
            if (!photo) {
                return res.status(404).json({ message: "Фотография не найдена" });
            }
            await photo.destroy();
            return res.status(200).json({ message: "Фотография удалена" });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = PhotoController;
//# sourceMappingURL=photoController.js.map