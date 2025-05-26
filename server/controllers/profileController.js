const { Profile, User } = require('../models/models');
const jwt = require('jsonwebtoken');

class ProfileController {
  /* Создание профиля пользователя */
  static async createProfile(req, res) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: "Вы не авторизованы" });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'secret_key');
      const userId = decoded.id;

      const { firstName, lastName, phone } = req.body;
      const profile = await Profile.create({ userId, firstName, lastName, phone });

      return res.status(201).json(profile);
    } catch (error) {
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
      const decoded = jwt.verify(token, 'secret_key');
      const userId = decoded.id;

      const profile = await Profile.findOne({
        where: { userId },
        include: [{ model: User }],
      });

      if (!profile) {
        return res.status(404).json({ message: "Профиль не найден" });
      }

      return res.status(200).json(profile);
    } catch (error) {
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
      const decoded = jwt.verify(token, 'secret_key');
      const userId = decoded.id;

      const { firstName, lastName, phone } = req.body;

      const profile = await Profile.findOne({ where: { userId } });
      if (!profile) {
        return res.status(404).json({ message: "Профиль не найден" });
      }

      await profile.update({ firstName, lastName, phone });

      return res.status(200).json(profile);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProfileController