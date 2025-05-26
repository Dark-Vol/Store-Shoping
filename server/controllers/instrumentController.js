const { Instrument } = require('../models/models');

class InstrumentController {
  /* Получение всех инструментов */
  static async getAllInstruments(req, res) {
    try {
      const instruments = await Instrument.findAll();
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение инструмента по id */
  static async getInstrumentById(req, res) {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(200).json(instrument);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getInstrumentByCategoryId(req, res) {
    const { categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({ where: { categoryId } });
      if (!instruments) {
        return res.status(404).json({ message: "Инструменты не найдены" });
      }
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Создание нового инструмента */
  static async createInstrument(req, res) {
    const { name, description, price, manufacturerId, categoryId } = req.body;
    if (!name || !description || !price || !manufacturerId || !categoryId) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const instrument = await Instrument.create({
        name,
        description,
        price,
        manufacturerId,
        categoryId,
      });
      return res.status(201).json(instrument);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Обновление инструмента по id */
  static async updateInstrument(req, res) {
    const { id } = req.params;
    const { name, description, price, manufacturerId, categoryId } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      await instrument.update({
        name,
        description,
        price,
        manufacturerId,
        categoryId,
      });
      return res.status(200).json(instrument);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Удаление инструмента по id */
  static async deleteInstrument(req, res) {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      await instrument.destroy();
      return res.status(204).json({ message: "Инструмент удален" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Поиск инструментов по названию */
  static async searchInstruments(req, res) {
    const { query } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          name: {
            [Op.like]: `%${query}%`,
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Фильтрация инструментов по параметрам */
  static async filterInstruments(req, res) {
    const { categoryId, manufacturerId, priceRange } = req.query;
    try {
      const instruments = await Instrument.findAll({
        where: {
          ...(categoryId && { categoryId }),
          ...(manufacturerId && { manufacturerId }),
          ...(priceRange && {
            price: {
              [Op.between]: priceRange.split(",").map(Number),
            },
          }),
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Сортировка инструментов по параметрам */
  static async sortInstruments(req, res) {
    const { sortBy, order } = req.query;
    try {
      const instruments = await Instrument.findAll({
        order: [[sortBy || "name", order || "ASC"]],
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Пагинация инструментов */
  static async paginateInstruments(req, res) {
    const { page, limit } = req.query;
    try {
      const instruments = await Instrument.findAll({
        offset: (page - 1) * limit,
        limit: parseInt(limit),
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение количества инструментов */
  static async countInstruments(req, res) {
    try {
      const count = await Instrument.count();
      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение категорий инструментов */
  static async getInstrumentCategories(req, res) {
    try {
      const categories = await InstrumentCategory.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение производителей инструментов */
  static async getInstrumentManufacturers(req, res) {
    try {
      const manufacturers = await InstrumentManufacturer.findAll();
      return res.status(200).json(manufacturers);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение фотографий инструмента */
  static async getInstrumentPhotos(req, res) {
    const { id } = req.params;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      return res.status(200).json(instrument.photos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Добавление фотографии инструмента */
  static async addInstrumentPhoto(req, res) {
    const { id } = req.params;
    const { photoUrl } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      instrument.photos.push(photoUrl);
      await instrument.save();
      return res.status(201).json(instrument.photos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Удаление фотографии инструмента */
  static async deleteInstrumentPhoto(req, res) {
    const { id } = req.params;
    const { photoUrl } = req.body;
    try {
      const instrument = await Instrument.findOne({ where: { id } });
      if (!instrument) {
        return res.status(404).json({ message: "Инструмент не найден" });
      }
      instrument.photos = instrument.photos.filter((photo) => photo !== photoUrl);
      await instrument.save();
      return res.status(200).json(instrument.photos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение отзывов инструмента */
  // static async getInstrumentReviews(req, res) {
  //   const { id } = req.params;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     return res.status(200).json(instrument.reviews);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  // /* Добавление отзыва инструмента */
  // static async addInstrumentReview(req, res) {
  //   const { id } = req.params;
  //   const { reviewText } = req.body;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     instrument.reviews.push(reviewText);
  //     await instrument.save();
  //     return res.status(201).json(instrument.reviews);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  // /* Удаление отзыва инструмента */
  // static async deleteInstrumentReview(req, res) {
  //   const { id } = req.params;
  //   const { reviewText } = req.body;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     instrument.reviews = instrument.reviews.filter((review) => review !== reviewText);
  //     await instrument.save();
  //     return res.status(200).json(instrument.reviews);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  // /* Получение рейтингов инструмента */
  // static async getInstrumentRatings(req, res) {
  //   const { id } = req.params;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     return res.status(200).json(instrument.ratings);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  // /* Добавление рейтинга инструмента */
  // static async addInstrumentRating(req, res) {
  //   const { id } = req.params;
  //   const { ratingValue } = req.body;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     instrument.ratings.push(ratingValue);
  //     await instrument.save();
  //     return res.status(201).json(instrument.ratings);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  // /* Удаление рейтинга инструмента */
  // static async deleteInstrumentRating(req, res) {
  //   const { id } = req.params;
  //   const { ratingValue } = req.body;
  //   try {
  //     const instrument = await Instrument.findOne({ where: { id } });
  //     if (!instrument) {
  //       return res.status(404).json({ message: "Инструмент не найден" });
  //     }
  //     instrument.ratings = instrument.ratings.filter((rating) => rating !== ratingValue);
  //     await instrument.save();
  //     return res.status(200).json(instrument.ratings);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  /* Получение всех инструментов с их категориями и производителями */
  static async getInstrumentsWithCategoriesAndManufacturers(req, res) {
    try {
      const instruments = await Instrument.findAll({
        include: [
          { model: Category, as: "category" },
          { model: Manufacturer, as: "manufacturer" },
        ],
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по производителю */
  static async getInstrumentsByManufacturer(req, res) {
    const { manufacturerId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: { manufacturerId },
        include: [{ model: Manufacturer, as: "manufacturer" }],
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по категории */
  static async getInstrumentsByCategory(req, res) {
    const { categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: { categoryId },
        include: [{ model: Category, as: "category" }],
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по диапазону цен */
  static async getInstrumentsByPriceRange(req, res) {
    const { minPrice, maxPrice } = req.query;
    try {
      const instruments = await Instrument.findAll({
        where: {
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по рейтингу */
  static async getInstrumentsByRating(req, res) {
    const { rating } = req.query;
    try {
      const instruments = await Instrument.findAll({
        where: {
          rating: {
            [Op.gte]: rating,
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по наличию */
  static async getInstrumentsByAvailability(req, res) {
    const { available } = req.query;
    try {
      const instruments = await Instrument.findAll({
        where: {
          available: {
            [Op.eq]: available,
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по производителю и категории */
  static async getInstrumentsByManufacturerAndCategory(req, res) {
    const { manufacturerId, categoryId } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          manufacturerId,
          categoryId,
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по производителю и диапазону цен */
  static async getInstrumentsByManufacturerAndPriceRange(req, res) {
    const { manufacturerId, minPrice, maxPrice } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          manufacturerId,
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по категории и диапазону цен */
  static async getInstrumentsByCategoryAndPriceRange(req, res) {
    const { categoryId, minPrice, maxPrice } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          categoryId,
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /* Получение инструментов по производителю и рейтингу */
  static async getInstrumentsByManufacturerAndRating(req, res) {
    const { manufacturerId, rating } = req.params;
    try {
      const instruments = await Instrument.findAll({
        where: {
          manufacturerId,
          rating: {
            [Op.gte]: rating,
          },
        },
      });
      return res.status(200).json(instruments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = InstrumentController;