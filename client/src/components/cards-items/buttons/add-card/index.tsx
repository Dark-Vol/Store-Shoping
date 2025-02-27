import React from "react";
import "./Style.scss";

interface AddToCartButtonProps {
    onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
    return (
        <button className="
            button
            button--tamaya 
            button--round-l 
            button--text-thick 
            button--border-medium 
            button--text-upper 
            button--size-s 
            button--inverted" 
            data-text="Open"
            onClick={onClick}
            >
            <span>Open</span>
        </button>
    );
};

export default AddToCartButton;