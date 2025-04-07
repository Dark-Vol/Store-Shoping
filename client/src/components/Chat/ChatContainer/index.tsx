import BtnCloseTicket from "@components/Buttons/BtnCloseTicket";
import BtnSendMasseg from "@components/Buttons/BtnSendMasseg";
import InputSetMasseg from "@components/Inputs/InputSetMasseg";
import React from "react";

type Message = {
  text: string;
  role: string;
};

type ChatContainerProps = {
  messages: Message[];
  message: string;
  setMessage: (value: string) => void;
  SendMasseg: () => void;
  CloseTicket: () => void;
  getRole: (message: Message) => string;
};

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  message,
  setMessage,
  SendMasseg,
  CloseTicket,
  getRole,
}) => (
  <div className="chat-container">
    <div className="chat-header">
      <h1>Chat</h1>
    </div>
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index}>
          <b>From {getRole(message)}:</b>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
    <div className="chat_input_container">
      <InputSetMasseg
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
      <BtnSendMasseg onClick={SendMasseg} />
      <BtnCloseTicket onClick={CloseTicket} />
    </div>
  </div>
);

export default ChatContainer;