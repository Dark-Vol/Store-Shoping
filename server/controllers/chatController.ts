import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Support, Message } from "@models/models";

class ChatController {
    /* Создание запроса к администратору */
    static async createSupportTicket(req: Request, res: Response): Promise<Response> {
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json("Ticket title and description are required.");
        }
        try {
            const ticket = await Support.create({ title, body });
            return res.status(201).json(ticket);
        } catch (error: any) {
            return res.status(500).json({ error: "Server error. Try again later." });
        }
    }

    /* Закрытие запроса к администратору */
    static async closeSupportTicket(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json("Enter ticket ID");
        }
        try {
            const ticket = await Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Ticket not found");
            }
            await ticket.update({ statusClose: true });
            return res.status(200).json("Ticket closed");
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({ error: "Server error. Try again later." });
        }
    }

    /* Получение всех запросов для администратора */
    static async getStateTicket(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json("Enter ticket ID");
        }
        try {
            const ticket = await Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Ticket not found");
            }
            return res.status(200).json({ statusClose: ticket.get('statusClose') });
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({ error: "Server error. Try again later." });
        }
    }

    /* Сохранение сообщений в чате */
    static async saveMessage(req: Request, res: Response): Promise<Response> {
        const { role, text, room } = req.body;
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            return res.status(401).json({ error: "Token is missing" });
        }
        const decoded = jwt.decode(token) as { id: number } | null;
        if (!decoded || !decoded.id) {
            return res.status(401).json({ error: "Invalid token" });
        }
        const id = decoded.id;
        console.log(id);
        if (!role || !text || !room) {
            return res.status(400).json("Enter name, text and room number");
        }
        try {
            if (role == "User") {
                const message = await Message.create({ text, room, UserId: id });
                return res.status(201).json({ message: "Message saved", data: message });
            } else if (role == "admin") {
                const message = await Message.create({ text, room, AdministratorId: id });
                return res.status(201).json({ message: "Message saved", data: message });
            }
            return res.status(400).json("Wrong role");
        } catch (error: any) {
            console.error("Error saving message:", error);
            return res.status(500).json({ error: "Server error. Try again later." });
        }
    }

    /* Получение всех сообщений в чате */
    static async getMessages(req: Request, res: Response): Promise<Response> {
        const { room } = req.params;
        if (!room) {
            return res.status(400).json("Enter room number");
        }
        try {
            const messages = await Message.findAll({ where: { room: Number(room) }, order: [["createdAt", "ASC"]] });
            return res.status(200).json({ data: messages });
        } catch (error: any) {
            console.error("Error receiving messages:", error);
            return res.status(500).json({ error: "Server error. Try again later." });
        }
    }
}

export default ChatController;

