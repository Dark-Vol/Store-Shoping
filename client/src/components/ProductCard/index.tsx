import React from 'react';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  instrumentName: string;
  description: string;
  price: number;
  rating?: number;
  imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  instrumentName,
  description,
  price,
  rating = 0,
  imageUrl = 'https://via.placeholder.com/150',
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={instrumentName} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{instrumentName}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.rating}>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 