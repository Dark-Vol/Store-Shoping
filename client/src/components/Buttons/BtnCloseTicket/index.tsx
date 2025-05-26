import React from "react";

type BtnCloseTicketProps = {
  onClick: () => void;
};

const BtnCloseTicket: React.FC<BtnCloseTicketProps> = ({ onClick }) => (
  <button className="btn_close_ticket" onClick={onClick}>
    Close Ticket
  </button>
);

export default BtnCloseTicket;