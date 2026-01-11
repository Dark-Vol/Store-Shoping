import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Administrator, Support } from "@models/models";

class AdminController {
    static async loginAdmin(req: Request, res: Response): Promise<Response> {
        const { adminName, email, password } = req.body;
        if (!adminName || !email || !password) {
            return res.status(400).json("Enter your email and password");
        }
        try {
            const admin = await Administrator.findOne({ where: { email: email } });
            if (!admin) {
                return res.status(404).json("Admin not found");
            }
            
            if (password != admin.get('password')) {
                return res.status(400).json("Invalid password");
            }
            const token = jwt.sign({ id: admin.get('id') }, "secret_key", { expiresIn: "24h" });
            return res.status(200).json({ token });
        } catch (error: any) {
            console.error("Error in loginAdmin:", error);
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async reloginAdmin(req: Request, res: Response): Promise<Response> {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "You are not authorized" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token is missing" });
        }
        try {
            const payload = jwt.verify(token, "secret_key") as { id: number };
            const newToken = jwt.sign(payload, "secret_key");
            return res.status(200).json({ token: newToken });
        } catch (error) {
            console.log(error);
            return res.status(401).json({ message: "Token is invalid" });
        }
    }

    static async showSupportTicket(req: Request, res: Response): Promise<Response> {
        try {
            const tickets = await Support.findAll();
            if (tickets) {
                return res.status(200).json(tickets);
            }
            return res.status(404).json("Tickets not found");
        } catch (error: any) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default AdminController;

