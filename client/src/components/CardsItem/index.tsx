
import styles from"./CardsItem.module.scss"

interface ProductCardProps {
    title: string;
    image: string;
    price: number;
    rating: number;
    onAddToCart: () => void;
    imageLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, rating, onAddToCart, imageLink }) => {
    console.log(styles)
    return (
        <div className="product-card">
            {/* Обёртка для изображения с ссылкой */}
            <a href={imageLink} target="_blank" rel="noopener noreferrer" className="product-image-container">
                <img src={image} alt={title} className="product-image" />
            </a>

            {/* Блок с названием продукта */}
            <h2 className="product-title">{title}</h2>

            {/* Блок с ценой */}
            <p className="product-price">{price.toLocaleString()} руб.</p>

            {/* Блок с рейтингом */}
            <div className="product-rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
                        ★
                    </span>
                ))}
            </div>

            {/* Описание продукта */}
            <p className="product-description">
                Этот музыкальный инструмент — идеальный выбор для создания умиротворяющей атмосферы. Он идеально подходит для использования в детских комнатах, а также при выполнении расслабляющих процедур. Инструмент выпускает мелодичные, спокойные звуки, которые помогут вашему малышу расслабиться и быстрее уснуть.
            </p>

            {/* Кнопка добавления в корзину */}
            <div className="product-action">
                <button onClick={onAddToCart} className="add-to-cart-button">
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
