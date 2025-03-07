import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const useChat = () => {
    const [activeChat, setActiveChat] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [room, setRoom] = useState(-1);
    const [problem, setProblem] = useState({ title: "", description: "" });
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const createTicket = useCallback(() => {
        axios.post("http://localhost:4000/api/chat/ticket", problem)
            .then(response => {
                socket.emit("joinRoom", response.data.id);
                setRoom(response.data.id);
                localStorage.setItem("roomId", response.data.id);
            })
            .catch(error => console.error("Ошибка при создании тикета:", error));
    }, [problem]);

    const sendMessage = useCallback(() => {
        axios.post("http://localhost:4000/api/chat/message", { role: "User", room, text: message }, {
            headers: { Authorization: localStorage.getItem("token") },
        })
            .then(() => {
                socket.emit("sendMessage", { room, role: "User", text: message });
                setMessage("");
            })
            .catch(error => console.error("Ошибка при отправке сообщения:", error.response?.data));
    }, [message, room]);

    const toggleChat = () => setIsChatOpen(prev => !prev);

    return { messages, message, setMessage, sendMessage, problem, setProblem, createTicket, activeChat, setActiveChat, isChatOpen, toggleChat };
};

export default useChat;
