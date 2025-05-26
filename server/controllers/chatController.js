const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Support, Message} = require("../models/models");

class ChatController {
    /* Созание запроса к администратору */
    static async createSupportTicket(req, res) {
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json("Название тикета и описание обязательны.");
        }
        try {
            const ticket = await Support.create({ title, body });
            return res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }

    /* Закритие запроса к администратору */
    static async closeSupportTicket(req , res){
        const { id } = req.body;
        if (!id) {
            return res.status(400).json("Введите ИД тикета");
        }
        try {
            const ticket = await Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Тикет не найден");
            }
            ticket.statusClose = true;
            await ticket.save();
            return res.status(200).json("Тикет закрыт");
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }

    /* Получение всех запросов для администратора */
    static async getStateTicket(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json("Введите ИД тикета");
        }
        try {
            const ticket = await Support.findByPk(id);
            if (!ticket) {
                return res.status(404).json("Тикет не найден");
            }
            return res.status(200).json({ statusClose: ticket.statusClose });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }

    /*Сохранение сообщениий в чате */
    static async saveMessage(req, res) {
        const { role, text, room } = req.body;
        const token = req.headers.authorization
        console.log(token)
        const id = jwt.decode(token).id
        console.log(id)
        if (!role || !text || !room ) {
            return res.status(400).json("Введите имя, текст и номер комнаты");
        }
        try {
            if (role == "User") {
                const message = await Message.create({ text, room, UserId: id});
                return res.status(201).json({ message: "Сообщение сохранено", data: message });
            } else if (role == "admin") {
                const message = await Message.create({ text, room, AdministratorId: id});
                return res.status(201).json({ message: "Сообщение сохранено", data: message });
            }
        } catch (error) {
            console.error("Ошибка сохранения сообщения:", error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }

    /* Получение всех сообщениий в чате */
    static async getMessages(req, res) {
        const { room } = req.params;
        if (!room) {
            return res.status(400).json("Введите номер комнаты");
        }
        try {
            const messages = await Message.findAll({ where: { room }, order: [["createdAt", "ASC"]] });
            return res.status(200).json({ data: messages });
        } catch (error) {
            console.error("Ошибка получения сообщений:", error);
            return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
        }
    }
}

module.exports = ChatController;

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { User, Support, Message, Administrator} = require("../models/models");

// class ChatController {
//     static async createUser(req, res) {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json("Введите корректный email и пароль");
//         }
//         try {
//             const existingUser = await User.findOne({ where: { email:email } });
//             if (existingUser) {
//                 return res.status(400).json("Пользователь с таким email уже существует");
//             }
//             const hashedPassword = await bcrypt.hash(password, 4);
//             const user = await User.create({ email:email, password: hashedPassword });
//             const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "24h" });
//             return res.status(201).json({ token });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }

//     static async loginUser(req, res) {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json("Введите email и пароль");
//         }
//         try {
//             const user = await User.findOne({ where: { email:email } });
//             if (!user) {
//                 return res.status(404).json("Пользователь не найден");
//             }
//             const validPassword = await bcrypt.compare(password, user.password);
//             if (!validPassword) {
//                 return res.status(400).json("Неверный пароль");
//             }
//             const token = jwt.sign({ id: user.id}, "secret_key", { expiresIn: "24h" });
//             return res.status(200).json({ token });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }

//     static async createSupportTicket(req, res) {
//         const { title, body } = req.body;
//         if (!title || !body) {
//             return res.status(400).json("Название тикета и описание обязательны.");
//         }
//         try {
//             const ticket = await Support.create({ title, body });
//             return res.status(201).json(ticket);
//         } catch (error) {
//             res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
//         }
//     }

//     static async closeSupportTicket(req , res){
//         const { id } = req.body;
//         if (!id) {
//             return res.status(400).json("Введите ИД тикета");
//         }
//         try {
//             const ticket = await Support.findByPk(id);
//             if (!ticket) {
//                 return res.status(404).json("Тикет не найден");
//             }
//             ticket.statusClose = true;
//             await ticket.save();
//             return res.status(200).json("Тикет закрыт");
//         } catch (error) {
//             console.log(error)
//             res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
//         }
//     }

//     static async getStateTicket(req, res) {
//         const { id } = req.params;
//         if (!id) {
//             return res.status(400).json("Введите ИД тикета");
//         }
//         try {
//             const ticket = await Support.findByPk(id);
//             if (!ticket) {
//                 return res.status(404).json("Тикет не найден");
//             }
//             return res.status(200).json({ statusClose: ticket.statusClose });
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
//         }
//     }

//     static async reloginUser(req, res) {
//         const authHeader = req.headers.authorization;
//         if (!authHeader) {
//             return res.status(401).json({ message: "Вы не авторизованы" });
//         }
//         const token = authHeader.split(" ")[1];
//         if (!token) {
//             return res.status(401).json({ message: "Токен отсутствует" });
//         }
//         try {
//             const payload = jwt.verify(token, "secret_key");
//             const newToken = jwt.sign(payload, "secret_key");
//             return res.status(200).json({ token: newToken });
//         } catch (error) {
//             console.log(error)
//             return res.status(401).json({ message: "Токен недействителен" });
//         }
//     }

//     /*Сохранение и получение всех сообщениий */
//     static async saveMessage(req, res) {
//         const { role, text, room } = req.body;
//         const token = req.headers.authorization
//         console.log(token)
//         const id = jwt.decode(token).id
//         console.log(id)
//         if (!role || !text || !room ) {
//             return res.status(400).json("Введите имя, текст и номер комнаты");
//         }
//         try {
//             if (role == "User") {
//                 const message = await Message.create({ text, room, UserId: id});
//                 return res.status(201).json({ message: "Сообщение сохранено", data: message });
//             } else if (role == "admin") {
//                 const message = await Message.create({ text, room, AdministratorId: id});
//                 return res.status(201).json({ message: "Сообщение сохранено", data: message });
//             }
//         } catch (error) {
//             console.error("Ошибка сохранения сообщения:", error);
//             return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
//         }
//     }
//     static async getMessages(req, res) {
//         const { room } = req.params;
//         if (!room) {
//             return res.status(400).json("Введите номер комнаты");
//         }
//         try {
//             const messages = await Message.findAll({ where: { room }, order: [["createdAt", "ASC"]] });
//             return res.status(200).json({ data: messages });
//         } catch (error) {
//             console.error("Ошибка получения сообщений:", error);
//             return res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
//         }
//     }
    
// }

// module.exports = ChatController;