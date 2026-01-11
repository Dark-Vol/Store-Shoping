"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class AddressController {
    /* Получение всех адресов */
    static async getAllAddresses(req, res) {
        try {
            const addresses = await models_1.Address.findAll();
            return res.status(200).json(addresses);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Получение адреса по id */
    static async getAddressById(req, res) {
        const { id } = req.params;
        try {
            const address = await models_1.Address.findOne({ where: { id: Number(id) } });
            if (!address) {
                return res.status(404).json({ message: "Адрес не найден" });
            }
            return res.status(200).json(address);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Создание нового адреса */
    static async createAddress(req, res) {
        const { address: street, city, state, zipCode } = req.body;
        if (!street || !city || !state || !zipCode) {
            return res.status(400).json({ message: "Введите корректные данные" });
        }
        try {
            const address = await models_1.Address.create({ address: street, city, state, zipCode });
            return res.status(201).json(address);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Обновление адреса по id */
    static async updateAddress(req, res) {
        const { id } = req.params;
        const { address: street, city, state, zipCode } = req.body;
        try {
            const address = await models_1.Address.findOne({ where: { id: Number(id) } });
            if (!address) {
                return res.status(404).json({ message: "Адрес не найден" });
            }
            await address.update({ address: street, city, state, zipCode });
            return res.status(200).json(address);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    /* Удаление адреса по id */
    static async deleteAddress(req, res) {
        const { id } = req.params;
        try {
            const address = await models_1.Address.findOne({ where: { id: Number(id) } });
            if (!address) {
                return res.status(404).json({ message: "Адрес не найден" });
            }
            await address.destroy();
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = AddressController;
//# sourceMappingURL=addressController.js.map