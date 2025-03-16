import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const useChat = () => {
  const [activeChat, setActiveChat] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [room, setRoom] = useState(-1);

  const [problemDescription, setProblemDescription] = useState("");
  const [problemTitle, setProblemTitle] = useState("");

  const createTicket = useCallback(() => {
    axios
      .post("http://localhost:4000/api/chat/ticket", {
        title: problemTitle,
        body: problemDescription,
      })
      .then((response) => {
        console.log("Тикет успешно создан:", response.data);
        socket.emit("joinRoom", response.data.id);
        setRoom(response.data.id);
        localStorage.setItem("roomId", response.data.id);
      })
      .catch((error) => {
        console.error("Ошибка при создании тикета:", error);
      });
  }, [problemTitle, problemDescription]);

  useEffect(() => {
    const savedRoom = localStorage.getItem("roomId");
    if (savedRoom) {
      setRoom(Number(localStorage.getItem("roomId")) || 0);
      socket.emit("joinRoom", savedRoom)
      setIsChatOpen(true);
      setActiveChat(true);
    }
  }, []);

  const SendMasseg = useCallback(() => {
    axios
      .post(
        "http://localhost:4000/api/chat/message",
        {
          role: "User",
          room: room,
          text: message,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Сообщение сохранено:", response.data);
        socket.emit("sendMessage", { room, role: "User", text: message });
        setMessage("");
      })
      .catch((error) => {
        console.error("Ошибка при сохранении сообщения:", error.response?.data);
      });
  }, [message, room]);

  useEffect(() => {
    const savedRoom = localStorage.getItem("roomId");
    if (savedRoom) {
      setRoom(Number(localStorage.getItem("roomId")) || 0);
      socket.emit("joinRoom", savedRoom)
      setIsChatOpen(true);
      setActiveChat(true);
    }
  }, []);

  const toggleChat = () => setIsChatOpen((prev) => !prev);
  return {
    messages,
    message,
    setMessage,
    SendMasseg,
    problemDescription,
    problemTitle,
    createTicket,
    activeChat,
    setActiveChat,
    isChatOpen,
    toggleChat,
  };
};

export default useChat;
