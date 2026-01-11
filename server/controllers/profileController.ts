import { Request, Response } from "express";
import { Profile, User } from '@models/models';
import jwt from 'jsonwebtoken';

class ProfileController {
  /* Создание профиля пользователя */
  static async createProfile(req: Request, res: Response): Promise<Response> {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: "Вы не авторизованы" });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'secret_key') as { id: number };
      const userId = decoded.id;

      const { firstName, lastName, phone } = req.body;
      const profile = await Profile.create({ UserId: userId, firstName, lastName, phone });

      return res.status(201).json(profile);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение профиля пользователя */
  static async getProfile(req: Request, res: Response): Promise<Response> {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: "Вы не авторизованы" });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'secret_key') as { id: number };
      const userId = decoded.id;

      const profile = await Profile.findOne({
        where: { UserId: userId },
        include: [{ model: User }],
      });

      if (!profile) {
        return res.status(404).json({ message: "Профиль не найден" });
      }

      return res.status(200).json(profile);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление профиля пользователя */
  static async updateProfile(req: Request, res: Response): Promise<Response> {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: "Вы не авторизованы" });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'secret_key') as { id: number };
      const userId = decoded.id;

      const { firstName, lastName, phone } = req.body;

      const profile = await Profile.findOne({ where: { UserId: userId } });
      if (!profile) {
        return res.status(404).json({ message: "Профиль не найден" });
      }

      await profile.update({ firstName, lastName, phone });

      return res.status(200).json(profile);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default ProfileController;

