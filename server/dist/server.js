"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("./models/models");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const db_1 = __importDefault(require("./config/db"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routers_1.default);
app.use((0, express_fileupload_1.default)({}));
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
io.on("connection", (socket) => {
    console.log(socket.id);
    console.log(`Socket connected: ${socket.id}`);
    socket.on("joinRoom", (numberRoom) => {
        if (!numberRoom) {
            console.error("room missing");
            return;
        }
        console.log(numberRoom, 'NUMBER ROOM JOIN');
        socket.join(String(numberRoom));
        console.log(`socket ID: ${socket.id} connected to room ${numberRoom}`);
    });
    socket.on("sendMessage", (data) => {
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
const start = async () => {
    try {
        await db_1.default.authenticate();
        await db_1.default.sync({ alter: true });
        server.listen(4000, () => console.log('Server started on port 4000'));
    }
    catch (error) {
        console.error("Unable to start the server:", error.message);
    }
};
start();
//# sourceMappingURL=server.js.map