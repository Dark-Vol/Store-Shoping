const { Address } = require('../models/models');

class AddressController {
  /* Получение всех адресов */
  static async getAllAddresses(req, res) {
    try {
      const addresses = await Address.findAll();
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение адреса по id */
  static async getAddressById(req, res) {
    const { id } = req.params;
    try {
      const address = await Address.findOne({ where: { id } });
      if (!address) {
        return res.status(404).json({ message: "Адрес не найден" });
      }
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Создание нового адреса */
  static async createAddress(req, res) {
    const { street, city, state, zip } = req.body;
    if (!street || !city || !state || !zip) {
      return res.status(400).json({ message: "Введите корректные данные" });
    }
    try {
      const address = await Address.create({ street, city, state, zip });
      return res.status(201).json(address);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление адреса по id */
  static async updateAddress(req, res) {
    const { id } = req.params;
    const { street, city, state, zip } = req.body;
    try {
      const address = await Address.findOne({ where: { id } });
      if (!address) {
        return res.status(404).json({ message: "Адрес не найден" });
      }
      await address.update({ street, city, state, zip });
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление адреса по id */
  static async deleteAddress(req, res) {
    const { id } = req.params;
    try {
      const address = await Address.findOne({ where: { id } });
      if (!address) {
        return res.status(404).json({ message: "Адрес не найден" });
      }
      await address.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AddressController;