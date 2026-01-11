import { Request, Response } from "express";
import { Address } from '@models/models';

class AddressController {
  /* Получение всех адресов */
  static async getAllAddresses(req: Request, res: Response): Promise<Response> {
    try {
      const addresses = await Address.findAll();
      return res.status(200).json(addresses);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Получение адреса по id */
  static async getAddressById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const address = await Address.findOne({ where: { id: Number(id) } });
      if (!address) {
        return res.status(404).json({ message: "Адрес не найден" });
      }
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Создание нового адреса */
  static async createAddress(req: Request, res: Response): Promise<Response> {
    const { address: street, city, state, zipCode } = req.body;
    if (!street || !city || !state || !zipCode) {
      return res.status(400).json({ message: "Please enter correct data" });
    }
    try {
      const address = await Address.create({ address: street, city, state, zipCode });
      return res.status(201).json(address);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Обновление адреса по id */
  static async updateAddress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { address: street, city, state, zipCode } = req.body;
    try {
      const address = await Address.findOne({ where: { id: Number(id) } });
      if (!address) {
        return res.status(404).json({ message: "Address not found" });
      }
      await address.update({ address: street, city, state, zipCode });
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /* Удаление адреса по id */
  static async deleteAddress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const address = await Address.findOne({ where: { id: Number(id) } });
      if (!address) {
        return res.status(404).json({ message: "Address not found" });
      }
      await address.destroy();
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default AddressController;

