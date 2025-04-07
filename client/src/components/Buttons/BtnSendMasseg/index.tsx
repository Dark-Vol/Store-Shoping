import React from "react";

type BtnSendMassegProps = {
  onClick: () => void;
};

const BtnSendMasseg: React.FC<BtnSendMassegProps> = ({ onClick }) => (
  <button className="btn_send_masseg" onClick={onClick}>
    Send
  </button>
);

export default BtnSendMasseg;