import { Request, Response } from "express";
import { Photo } from '@models/models';

class PhotoController {
  /* Получение всех фотографий */
  static async getAllPhotos(req: Request, res: Response): Promise<Response> {
    try {
      const photos = await Photo.findAll();
      return res.status(200).json(photos);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение фотографии по id */
  static async getPhotoById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const photo = await Photo.findOne({ where: { id: Number(id) } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      return res.status(200).json(photo);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Создание новой фотографии */
  static async createPhoto(req: Request, res: Response): Promise<Response> {
    const { path, description } = req.body;
    if (!path) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const photo = await Photo.create({ path, description });
      return res.status(201).json(photo);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление фотографии по id */
  static async updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { path, description } = req.body;
    try {
      const photo = await Photo.findOne({ where: { id: Number(id) } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      await photo.update({ path, description });
      return res.status(200).json(photo);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление фотографии по id */
  static async deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const photo = await Photo.findOne({ where: { id: Number(id) } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      await photo.destroy();
      return res.status(200).json({ message: "Фотография удалена" });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default PhotoController;

