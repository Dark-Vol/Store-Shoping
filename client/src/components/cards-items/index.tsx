import React, { useState } from "react";
import { Product } from "./types";

const product: Product = {
    name: "Yamaha Acoustic Guitar",
    category: "Guitars",
    description: "A high-quality acoustic guitar, perfect for beginners and professionals alike.",
    price: 299.99,
    colors: [
        { name: "natural", hex: "#C19A6B", image: "/img/natural.png" },
        { name: "black", hex: "#000000", image: "/img/black.png" },
        { name: "sunburst", hex: "#D95B28", image: "/img/sunburst.png" },
    ],
    sizes: [39, 40, 41, 42],
};

const ProductCard: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

    return (
        <div className="product-card">
            <div className="image-container">
                <img
                    src={selectedColor.image}
                    alt={product.name}
                />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <h3>{product.category}</h3>
                <p>{product.description}</p>
            </div>

            <div className="color-selector">
                <h3>Color</h3>
                <div className="color-options">
                    {product.colors.map((color) => (
                        <button
                            key={color.name}
                            className={selectedColor.name === color.name ? "selected" : ""}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
            </div>

            <div className="size-selector">
                <h3>Size</h3>
                <div className="size-options">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            className={selectedSize === size ? "selected" : ""}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}"
                        </button>
                    ))}
                </div>
            </div>

            <div className="price-cart">
                <h1>${product.price}</h1>
                <button>
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
