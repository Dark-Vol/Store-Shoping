"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models/models");
class ChatController {
    /* Создание запроса к администратору */
    static async createSupportTicket(req, res) {
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json("Название тикета и описание обязательны.");
        }
        try {
            const ticket = await models_1.Support.create({ title, body });
            return res.status(201).json(ticket);
        }
        catch (error) {
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
    /* Закрытие запроса к администратору */
    static async closeSupportTicket(req, res) {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json("Введите ИД тикета");
        }
        try {
            const ticket = await models_1.Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Тикет не найден");
            }
            await ticket.update({ statusClose: true });
            return res.status(200).json("Тикет закрыт");
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
    /* Получение всех запросов для администратора */
    static async getStateTicket(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json("Введите ИД тикета");
        }
        try {
            const ticket = await models_1.Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Тикет не найден");
            }
            return res.status(200).json({ statusClose: ticket.get('statusClose') });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
    /* Сохранение сообщений в чате */
    static async saveMessage(req, res) {
        const { role, text, room } = req.body;
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            return res.status(401).json({ error: "Токен отсутствует" });
        }
        const decoded = jsonwebtoken_1.default.decode(token);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ error: "Неверный токен" });
        }
        const id = decoded.id;
        console.log(id);
        if (!role || !text || !room) {
            return res.status(400).json("Введите имя, текст и номер комнаты");
        }
        try {
            if (role == "User") {
                const message = await models_1.Message.create({ text, room, UserId: id });
                return res.status(201).json({ message: "Сообщение сохранено", data: message });
            }
            else if (role == "admin") {
                const message = await models_1.Message.create({ text, room, AdministratorId: id });
                return res.status(201).json({ message: "Сообщение сохранено", data: message });
            }
            return res.status(400).json("Неверная роль");
        }
        catch (error) {
            console.error("Ошибка сохранения сообщения:", error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
    /* Получение всех сообщений в чате */
    static async getMessages(req, res) {
        const { room } = req.params;
        if (!room) {
            return res.status(400).json("Введите номер комнаты");
        }
        try {
            const messages = await models_1.Message.findAll({ where: { room: Number(room) }, order: [["createdAt", "ASC"]] });
            return res.status(200).json({ data: messages });
        }
        catch (error) {
            console.error("Ошибка получения сообщений:", error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
}
exports.default = ChatController;
//# sourceMappingURL=chatController.js.map