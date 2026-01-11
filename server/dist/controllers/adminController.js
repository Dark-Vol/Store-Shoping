"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models/models");
class AdminController {
    static async loginAdmin(req, res) {
        const { adminName, email, password } = req.body;
        if (!adminName || !email || !password) {
            return res.status(400).json("Введите email и пароль");
        }
        try {
            const admin = await models_1.Administrator.findOne({ where: { email: email } });
            if (!admin) {
                return res.status(404).json("Admin не найден");
            }
            if (password != admin.get('password')) {
                return res.status(400).json("Неверный пароль");
            }
            const token = jsonwebtoken_1.default.sign({ id: admin.get('id') }, "secret_key", { expiresIn: "24h" });
            return res.status(200).json({ token });
        }
        catch (error) {
            console.error("Error in loginAdmin:", error);
            return res.status(500).json({ error: error.message });
        }
    }
    static async reloginAdmin(req, res) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Вы не авторизованы" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Токен отсутствует" });
        }
        try {
            const payload = jsonwebtoken_1.default.verify(token, "secret_key");
            const newToken = jsonwebtoken_1.default.sign(payload, "secret_key");
            return res.status(200).json({ token: newToken });
        }
        catch (error) {
            console.log(error);
            return res.status(401).json({ message: "Токен недействителен" });
        }
    }
    static async showSupportTicket(req, res) {
        try {
            const tickets = await models_1.Support.findAll();
            if (tickets) {
                return res.status(200).json(tickets);
            }
            return res.status(404).json("Тикеты не найдены");
        }
        catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = AdminController;
//# sourceMappingURL=adminController.js.map