const { Photo } = require('../models/models');

class PhotoController {
  /* Получение всех фотографий */
  static async getAllPhotos(req, res) {
    try {
      const photos = await Photo.findAll();
      return res.status(200).json(photos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение фотографии по id */
  static async getPhotoById(req, res) {
    const { id } = req.params;
    try {
      const photo = await Photo.findOne({ where: { id } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      return res.status(200).json(photo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Создание новой фотографии */
  static async createPhoto(req, res) {
    const { title, description, url } = req.body;
    if (!title || !description || !url) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const photo = await Photo.create({ title, description, url });
      return res.status(201).json(photo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Обновление фотографии по id */
  static async updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description, url } = req.body;
    try {
      const photo = await Photo.findOne({ where: { id } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      await photo.update({ title, description, url });
      return res.status(200).json(photo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Удаление фотографии по id */
  static async deletePhoto(req, res) {
    const { id } = req.params;
    try {
      const photo = await Photo.findOne({ where: { id } });
      if (!photo) {
        return res.status(404).json({ message: "Фотография не найдена" });
      }
      await photo.destroy();
      return res.status(200).json({ message: "Фотография удалена" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = PhotoController;