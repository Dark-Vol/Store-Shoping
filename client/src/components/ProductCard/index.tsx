import styles from "./ProductCard.module.scss"

const ProductCard: React.FC = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productBadge}>Premium</div>
      <div className={styles.productTiltEffect}>
        <div className={styles.productImage}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Premium Watch"
          />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>Chrono S-Series Watch</h2>
        <div className={styles.productDescription}>
          <p>
            Precision engineering meets timeless design. Swiss movement with
            sapphire crystal and genuine leather band.
          </p>
        </div>
        <div className={styles.productFeatures}>
          <span className={styles.feature}>Water Resistant</span>
          <span className={styles.feature}>5-Year Warranty</span>
          <span className={styles.feature}>Swiss Made</span>
        </div>
        <div className={styles.productBottom}>
          <div className={styles.productPrice}>
            <span className={styles.priceWas}>$1,299</span>
            <span className={styles.priceNow}>$899</span>
          </div>
          <button className={styles.productButton}>
            <span className={styles.buttonText}>Add to Cart</span>
            <svg
              className={styles.buttonIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
        <div className={styles.productMeta}>
          <div className={styles.productRating}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="0.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className={styles.ratingCount}>128 Reviews</span>
          </div>
          <div className={styles.productStock}>In Stock</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;