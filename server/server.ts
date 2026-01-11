import 'module-alias/register';
import './models/models';
import fileUpload from 'express-fileupload';
import express, { Express } from "express";
import router from "./routers";
import sequelize from "./config/db";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app: Express = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(fileUpload({}));

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

interface SocketData {
    room?: number;
    text?: string;
    role?: string;
}

io.on("connection", (socket) => {
    console.log(socket.id);
    console.log(`Socket connected: ${socket.id}`);

    socket.on("joinRoom", (numberRoom: number) => {
        if (!numberRoom) {
            console.error("room missing");
            return;
        }
        console.log(numberRoom, 'NUMBER ROOM JOIN');
        socket.join(String(numberRoom));
        console.log(`socket ID: ${socket.id} connected to room ${numberRoom}`);
    });

    socket.on("sendMessage", (data: SocketData) => {
        if (!data.room || !data.text || !data.role) {
            console.error("data:", data);
            return;
        }
        console.log(data.room, 'NUMBER ROOM SEND MESSAGE');
        console.log(`To room ${data.room} send message ${data.role} text: ${data.text}`);
        const clients = io.sockets.adapter.rooms.get(String(data.room));
        console.log(clients);
        io.to(String(data.room)).emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
    });
});

const start = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        server.listen(4000, () => console.log('Server started on port 4000'));
    } catch (error: any) {
        console.error("Unable to start the server:", error.message);
    }
};

start();

