
import styles from"./CardsItem.module.scss"
import Radio from "./Radio"

interface ProductCardProps {
    path?: string;
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
        <div className={styles.product_card}>
            {/* Обёртка для изображения с ссылкой */}
            <a href={styles.imageLink} target="_blank" rel="noopener noreferrer" className={styles.product_image_container}>
                <img src={image} alt={title} className={styles.product_image} />
            </a>

            {/* Блок с названием продукта */}
            <h2 className={styles.product_title}>{title}</h2>

            {/* Блок с ценой */}
            <p className={styles.product_price}>{price.toLocaleString()} руб.</p>

            {/* Блок с рейтингом */}
            <div className={styles.product_rating}>
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
                        ★
                    </span>
                ))}
            </div>

            {/* Описание продукта */}
            <p className={styles.product_description}>
            </p>

            {/* Кнопка добавления в корзину */}
            <div className={styles.product_action}>
                <button onClick={onAddToCart} className={styles.add_to_cart_button}>
                    Добавить в корзину
                </button>
                <button className={styles.product_action}>
                    <a href="http://">
                        Подробнее
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
