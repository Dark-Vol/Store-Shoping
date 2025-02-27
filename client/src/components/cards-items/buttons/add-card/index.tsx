import React from "react";
import "./Style.scss";

interface AddToCartButtonProps {
    onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
    return (
        <button className="add-to-cart-btn" onClick={onClick}>
            <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
    );
};

export default AddToCartButton;
