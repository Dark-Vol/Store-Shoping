import { Request, Response } from "express";
import { Instrument, Category, Manufacturer } from '@models/models';
import { Op } from 'sequelize';

class InstrumentController {
  /* Получение всех инструментов */
  static async getAllInstruments(req: Request, res: Response): Promise<Response> {
    try {
      const instruments = await Instrument.findAll();
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструмента по id */
  static async getInstrumentById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(200).json(instrument);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getInstrumentByCategoryId(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({ where: { CategoryId: Number(categoryId) } });
      if (!instruments || instruments.length === 0) {
        return res.status(404).json({ message: "Инструменты не найдены" });
      }
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Создание нового инструмента */
  static async createInstrument(req: Request, res: Response): Promise<Response> {
    const { instrumentName, description, ManufacturerId, CategoryId } = req.body;
    if (!instrumentName || !description || !ManufacturerId || !CategoryId) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const instrument = await Instrument.create({
        instrumentName,
        description,
        ManufacturerId,
        CategoryId,
      });
      return res.status(201).json(instrument);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление инструмента по id */
  static async updateInstrument(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { instrumentName, description, ManufacturerId, CategoryId } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      await instrument.update({
        instrumentName,
        description,
        ManufacturerId,
        CategoryId,
      });
      return res.status(200).json(instrument);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление инструмента по id */
  static async deleteInstrument(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      await instrument.destroy();
      return res.status(204).json({ message: "Инструмент удален" });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Поиск инструментов по названию */
  static async searchInstruments(req: Request, res: Response): Promise<Response> {
    const { query } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          instrumentName: {
            [Op.like]: `%${query}%`,
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Фильтрация инструментов по параметрам */
  static async filterInstruments(req: Request, res: Response): Promise<Response> {
    const { categoryId, manufacturerId, priceRange } = req.query;
    try {
      const whereClause: any = {};
      if (categoryId) whereClause.CategoryId = Number(categoryId);
      if (manufacturerId) whereClause.ManufacturerId = Number(manufacturerId);
      
      const instruments = await Instrument.findAll({ where: whereClause });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Сортировка инструментов по параметрам */
  static async sortInstruments(req: Request, res: Response): Promise<Response> {
    const { sortBy, order } = req.query;
    try {
      const instruments = await Instrument.findAll({
        order: [[(sortBy as string) || "instrumentName", (order as string) || "ASC"]],
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Пагинация инструментов */
  static async paginateInstruments(req: Request, res: Response): Promise<Response> {
    const { page, limit } = req.query;
    try {
      const instruments = await Instrument.findAll({
        offset: ((Number(page) || 1) - 1) * Number(limit || 10),
        limit: Number(limit || 10),
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение количества инструментов */
  static async countInstruments(req: Request, res: Response): Promise<Response> {
    try {
      const count = await Instrument.count();
      return res.status(200).json({ count });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение категорий инструментов */
  static async getInstrumentCategories(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение производителей инструментов */
  static async getInstrumentManufacturers(req: Request, res: Response): Promise<Response> {
    try {
      const manufacturers = await Manufacturer.findAll();
      return res.status(200).json(manufacturers);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение фотографий инструмента */
  static async getInstrumentPhotos(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(200).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Добавление фотографии инструмента */
  static async addInstrumentPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { photoUrl } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(201).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление фотографии инструмента */
  static async deleteInstrumentPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { photoUrl } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id: Number(id) } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(200).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение всех инструментов с их категориями и производителями */
  static async getInstrumentsWithCategoriesAndManufacturers(req: Request, res: Response): Promise<Response> {
    try {
      const instruments = await Instrument.findAll({
        include: [
          { model: Category },
          { model: Manufacturer },
        ],
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по производителю */
  static async getInstrumentsByManufacturer(req: Request, res: Response): Promise<Response> {
    const { manufacturerId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: { ManufacturerId: Number(manufacturerId) },
        include: [{ model: Manufacturer }],
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по категории */
  static async getInstrumentsByCategory(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: { CategoryId: Number(categoryId) },
        include: [{ model: Category }],
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по диапазону цен */
  static async getInstrumentsByPriceRange(req: Request, res: Response): Promise<Response> {
    const { minPrice, maxPrice } = req.query;
    try {
      return res.status(200).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по рейтингу */
  static async getInstrumentsByRating(req: Request, res: Response): Promise<Response> {
    const { rating } = req.query;
    try {
      return res.status(200).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по наличию */
  static async getInstrumentsByAvailability(req: Request, res: Response): Promise<Response> {
    const { available } = req.query;
    try {
      return res.status(200).json([]);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по производителю и категории */
  static async getInstrumentsByManufacturerAndCategory(req: Request, res: Response): Promise<Response> {
    const { manufacturerId, categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          ManufacturerId: Number(manufacturerId),
          CategoryId: Number(categoryId),
        },
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по производителю и диапазону цен */
  static async getInstrumentsByManufacturerAndPriceRange(req: Request, res: Response): Promise<Response> {
    const { manufacturerId, minPrice, maxPrice } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          ManufacturerId: Number(manufacturerId),
        },
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по категории и диапазону цен */
  static async getInstrumentsByCategoryAndPriceRange(req: Request, res: Response): Promise<Response> {
    const { categoryId, minPrice, maxPrice } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          CategoryId: Number(categoryId),
        },
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструментов по производителю и рейтингу */
  static async getInstrumentsByManufacturerAndRating(req: Request, res: Response): Promise<Response> {
    const { manufacturerId, rating } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          ManufacturerId: Number(manufacturerId),
        },
      });
      return res.status(200).json(instruments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default InstrumentController;

