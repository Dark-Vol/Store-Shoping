"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    /* Создание аккаунта пользователя */
    static async createUser(req, res) {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json("Введите корректные данные");
        }
        try {
            const existingUser = await models_1.User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json("Пользователь с таким email уже существует");
            }
            const hashedPassword = await bcrypt_1.default.hash(password, 4);
            const user = await models_1.User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });
            const token = jsonwebtoken_1.default.sign({ id: user.get('id') }, "secret_key", { expiresIn: "24h" });
            return res.status(201).json({ token });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Авторизация пользователя */
    static async loginUser(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("Введите email и пароль");
        }
        try {
            const user = await models_1.User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(404).json("Пользователь не найден");
            }
            const validPassword = await bcrypt_1.default.compare(password, user.get('password'));
            if (!validPassword) {
                return res.status(400).json("Неверный пароль");
            }
            const token = jsonwebtoken_1.default.sign({ id: user.get('id') }, "secret_key", { expiresIn: "24h" });
            return res.status(200).json({ token });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Повторная авторизация пользователя */
    static async reloginUser(req, res) {
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
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map