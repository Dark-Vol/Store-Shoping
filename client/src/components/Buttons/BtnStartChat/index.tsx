import React from "react";

type BtnStartChatProps = {
  onClick: () => void;
};

const BtnStartChat: React.FC<BtnStartChatProps> = ({ onClick }) => (
  <button className="btn-start-chat" onClick={onClick}>
    Start Chat
  </button>
);

export default BtnStartChat;