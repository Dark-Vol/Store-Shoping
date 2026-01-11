import { Request, Response } from "express";
import { Item } from '@models/models';

class ItemsController {
  /* Получение всех товаров */
  static async getAllItems(req: Request, res: Response): Promise<Response> {
    try {
      const items = await Item.findAll();
      return res.status(200).json(items);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение товара по id */
  static async getItemById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const item = await Item.findOne({ where: { id: Number(id) } });
      if (!item) {
        return res.status(404).json({ message: "Товар не найден" });
      }
      return res.status(200).json(item);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createItem(req: Request, res: Response): Promise<Response> {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const item = await Item.create({ serialNumber: name, price, description } as any);
      return res.status(201).json(item);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление товара по id */
  static async updateItem(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
      const item = await Item.findOne({ where: { id: Number(id) } });
      if (!item) {
        return res.status(404).json({ message: "Товар не найден" });
      }
      await item.update({ serialNumber: name, price, description } as any);
      return res.status(200).json(item);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление товара по id */
  static async deleteItem(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const item = await Item.findOne({ where: { id: Number(id) } });
      if (!item) {
        return res.status(404).json({ message: "Товар не найден" });
      }
      await item.destroy();
      return res.status(200).json({ message: "Товар успешно удален" });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default ItemsController;

