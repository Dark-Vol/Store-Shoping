"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ProfileController {
    /* Создание профиля пользователя */
    static async createProfile(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Вы не авторизованы" });
            }
            const token = authHeader.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
            const userId = decoded.id;
            const { firstName, lastName, phone } = req.body;
            const profile = await models_1.Profile.create({ UserId: userId, firstName, lastName, phone });
            return res.status(201).json(profile);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение профиля пользователя */
    static async getProfile(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Вы не авторизованы" });
            }
            const token = authHeader.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
            const userId = decoded.id;
            const profile = await models_1.Profile.findOne({
                where: { UserId: userId },
                include: [{ model: models_1.User }],
            });
            if (!profile) {
                return res.status(404).json({ message: "Профиль не найден" });
            }
            return res.status(200).json(profile);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Обновление профиля пользователя */
    static async updateProfile(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Вы не авторизованы" });
            }
            const token = authHeader.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
            const userId = decoded.id;
            const { firstName, lastName, phone } = req.body;
            const profile = await models_1.Profile.findOne({ where: { UserId: userId } });
            if (!profile) {
                return res.status(404).json({ message: "Профиль не найден" });
            }
            await profile.update({ firstName, lastName, phone });
            return res.status(200).json(profile);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = ProfileController;
//# sourceMappingURL=profileController.js.map