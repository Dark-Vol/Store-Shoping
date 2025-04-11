import { useEffect, useState, useCallback } from "react";
import { ReceivedMessage, Message } from "../types/chat";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const useChat = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [room, setRoom] = useState(-1);

  const [problemDescription, setProblemDescription] = useState("");
  const [problemTitle, setProblemTitle] = useState("");

  const [activeChat, setActiveChat] = useState(false)

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


  const CloseTicket = () => {
    axios.post("http://localhost:4000/api/chat/closeTicket", {
      id: room
    })
      .then((response) => {
        console.log(response)
        setActiveChat(false)
        setIsChatOpen(false)
        setProblemTitle("")
        setProblemDescription("")
        localStorage.removeItem("roomId")
        socket.emit('closeTicket', { room })
        // Вызов события закрытие тикета
      })
      .catch((error) => {
        console.error("Ошибка при сохранении сообщения:", error);
      });
  }

  useEffect(() => {
    if (room !== -1) {
      axios
        .get(`http://localhost:4000/api/chat/message/${room}`)
        .then((response) => {
          setMessages(response.data.data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке сообщений:", error.response?.data);
        });
    }
  }, [room]);

  const startChat = () => {
    if (!problemTitle || !problemDescription) {
      console.error("Название проблемы и описание проблемы обязательны.");
      return;
    }
    createTicket();
    setActiveChat(true)
  }

  const getRole = (message: Message): string => {
    if (message.role) {
      return message.role;
    }
    if (message.UserId) {
      return "User";
    } else {
      return "admin";
    }
  };

  useEffect(() => {
    const handleReceiveMessage = (data: ReceivedMessage) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, []);

  useEffect(() => {
    const savedRoom = localStorage.getItem("roomId");
    if (savedRoom) {
      setRoom(Number(savedRoom))
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
    setMessages,
    getRole,
    CloseTicket,
    setProblemTitle,
    setProblemDescription,
    startChat,
  };
};

export default useChat;
