import ProductCard from "../../components/CardsItem";
import React from "react";


const Home: React.FC = () => {
    return (
        <div>
            Home Page
            <ProductCard
                image="/assets/react.svg"
                title="Музыкальный инструмент"
                price={3500}
                rating={5}
                onAddToCart={() => console.log("Добавлено в корзину")}
                imageLink="/assets/Guitars.png"
            />
        </div>
    );
};

export default Home;