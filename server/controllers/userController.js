const { User, Account, Profile, Photo } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require('uuid')
const path = require('path')

class UserController {
  /* Создание аккаунта пользователя */
  static async createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password ) {
      return res.status(400).json("Введите корректные данные");
    }
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json("Пользователь с таким email уже существует");
      }
      const hashedPassword = await bcrypt.hash(password, 4);
      const user = await User.create(
        {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      );
      const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "24h" });
      return res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /* Автороизация пользователя */
  static async loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Введите email и пароль");
    }
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).json("Пользователь не найден");
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json("Неверный пароль");
      }
      const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "24h" });
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
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
      const payload = jwt.verify(token, "secret_key");
      const newToken = jwt.sign(payload, "secret_key");
      return res.status(200).json({ token: newToken });
    } catch (error) {
      console.log(error)
      return res.status(401).json({ message: "Токен недействителен" });
    }
  }
}

module.exports = UserController